import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { LeaguesService } from './services/leagues.service';
import { TeamsService } from './services/teams.service';
import { UsersService } from './services/users.service';

import { LandingComponent } from './components/landing/landing.component';
import { TeamsComponent } from './components/teams/teams.component';
import { UserSelectionComponent } from './components/user-selection/user-selection.component';
import { LeagueHomeComponent } from './components/league-home/league-home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FantasyHomeComponent } from './components/fantasy-home/fantasy-home.component';
import { FantasyComponent } from './components/fantasy/fantasy.component';

const appRoutes: Routes = [

  {
    path: 'fantasy',
    component: FantasyHomeComponent,
    children: [
      { path: '', component: FantasyHomeComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'leagues', component: LeagueHomeComponent },
      { path: '**', redirectTo: 'fantasyHome', pathMatch: 'full' },
    ]
  },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    UserSelectionComponent,
    LandingComponent,
    LeagueHomeComponent,
    NavBarComponent,
    FantasyHomeComponent,
    FantasyComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    LeaguesService,
    TeamsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
