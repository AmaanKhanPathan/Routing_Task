import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersArray : Array<Iuser> = [
    {
    username : "Jen",
    id : 1
    },
    {
    username : "John",
    id : 2
    },
    {
    username : "July",
    id : 3
    }
  ]

  constructor() { }

  getAllUsers():Array<Iuser>{
    return this.usersArray;
  }

  getSingleUser(id : number): Iuser{
    return this.usersArray.find(user => user.id === id)!
    
  }
}
