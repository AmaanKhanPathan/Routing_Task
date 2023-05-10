import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userInfo : Array<Iuser> = [];
  selectedUser ! : Iuser
  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this.userInfo = this._userService.getAllUsers();
    this.selectedUser = this.userInfo[0]
  }

}
