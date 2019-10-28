import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';


@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  users=[]
  constructor(private usersService: UsersService) {
    usersService.getUsers().subscribe(res=>{

    })
  }

  ngOnInit() {
  }

}
