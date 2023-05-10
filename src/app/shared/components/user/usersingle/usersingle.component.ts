import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-usersingle',
  templateUrl: './usersingle.component.html',
  styleUrls: ['./usersingle.component.scss']
})
export class UsersingleComponent implements OnInit {
  userId ! : number;
  userObject ! : Iuser


  constructor(
    private _route : ActivatedRoute,
    private _userService : UserService) { }

  ngOnInit(): void {
    // console.log(this._route.snapshot); 
    // this.userId = +this._route.snapshot.params['userid'];
    // console.log(this.userId);
    // this.userObject = this._userService.getSingleUser(this.userId)
    // console.log(this.userObject);

    this._route.params
        .subscribe((myparams : Params) => {
          // console.log(myparams);
          this.userId = +myparams['userid']
          // console.log(this.userId);
          this.userObject = this._userService.getSingleUser(this.userId);         
          
        })

    
    
   
  }

}
