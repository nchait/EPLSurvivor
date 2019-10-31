import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  currentUser;
  users=[];
  constructor(private usersService: UsersService,
              private router: Router) {
    this.usersService.getUsers().then(res=>{
      console.log(res);
      this.users=res;
    })
  }

  homePage(user){
    console.log(user)
    this.router.navigateByUrl('/teams')

  }

  ngOnInit() {
  }

}
