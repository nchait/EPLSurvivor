const   axios   = require('axios'),
        config  = require('./../../config/env.js');
var Team    = require('../models/Teams'),
    Fixture = require('../models/Fixtures'),
    Log     = require('../models/Logs'),
    headers = {
        "X-RapidAPI-Key": "28cce555cef6d1a66ab35dbad7e279ca",
        Accept:"application/json"
    };
module.exports.populateNewDB = async function () {
    // module.exports.getTeams();
    // module.exports.getFixtures();
    // module.exports.updateDB()
    module.exports.createUpdateLoop()
};

module.exports.getTeams = async function () {
    let response = await axios.get(`${config.footballAPIURL}/teams/league/524`, {headers:headers})
    let teams = response.data.api.teams;
    teams.forEach(function (thisTeam) {
        let team = new Team();
        team.team_id = thisTeam.team_id;
        team.name = thisTeam.name;
        team.logo = thisTeam.logo;
        team.venue_name = thisTeam.venue_name;

        team.save(function(err) {
            if (err)
                console.log(err);
        });
    })
};

module.exports.getFixtures = async function () {
    let response = await axios.get(`${config.footballAPIURL}/fixtures/league/524`, {headers:headers})
    var fixtures=response.data.api.fixtures;
    fixtures.forEach(function (thisFixture) {
        var fixture = new Fixture();
        fixture.fixture_id= thisFixture.fixture_id;
        fixture.league_id= thisFixture.league_id;
        fixture.event_date= thisFixture.event_date;
        fixture.week= thisFixture.round.split(" - ")[1];
        fixture.statusShort= thisFixture.statusShort;
        fixture.venue= thisFixture.venue;
        fixture.homeTeam= thisFixture.homeTeam.team_id;
        fixture.awayTeam= thisFixture.awayTeam.team_id;
        fixture.goalsHomeTeam= thisFixture.goalsHomeTeam;
        fixture.goalsAwayTeam= thisFixture.goalsAwayTeam;

        fixture.save(function(err) {
            if (err)
                console.log(err);
        });
    });
};

module.exports.createUpdateLoop = async function () {
    let x = new Date(Date.now())
    x.setHours(x.getHours()-1)
    let log = await Log.findOneAndUpdate(
        { _id: "5dc1fa56a6000902ed480d1f", fixtureUpdate: { $lt: x.getMilliseconds() } },
        { $set: { fixtureUpdate: Date.now() }}).lean();
    if(log!==null){
        await module.exports.updateDB()
    }
};

module.exports.updateDB = async function () {
    let logs = await Log.find({}).lean();
    const week = logs[0].week;
    let fixtures = await Fixture.find({week:week, statusShort:"NS"}, {_id:0, fixture_id:1}).lean();
    fixtures = fixtures.map( fixture => fixture.fixture_id)
    let newFixtures = await axios.get(`${config.footballAPIURL}/fixtures/league/524`, {headers: headers})
    let updates = newFixtures.data.api.fixtures.filter(fixture => fixtures.includes(fixture.fixture_id) && fixture.statusShort === "FT");
    let queries = [];
    updates.forEach(update =>{
        queries.push(Fixture.update(
            { fixture_id: update.fixture_id },
            { $set:
                    {
                        goalsAwayTeam: update.goalsAwayTeam,
                        goalsHomeTeam: update.goalsHomeTeam,
                        statusShort: update.statusShort
                    }
            })
        )
    });
    await Promise.all(queries);
    // TODO: verify selection correctness
};
