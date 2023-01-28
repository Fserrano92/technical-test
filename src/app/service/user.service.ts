import { Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers(): IUser[] {
    let userList: IUser[] = [];

    if (localStorage.getItem('userList')) {
      userList = JSON.parse(localStorage.getItem('userList') ?? '{}');
    } 

    return userList;
  }

  setUser(user: IUser) {
    let userList: IUser[] = [];

    if (localStorage.getItem('userList')) {
      userList = JSON.parse(localStorage.getItem('userList') ?? '{}');
    } 

    userList.push(user);
    
    localStorage.setItem(
      'userList',
      JSON.stringify(userList)
    );
  }

  clearUserList(){
    localStorage.removeItem('userList');
  }
}
