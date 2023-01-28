import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'cellPhone', 'profession', 'incomes']; 
  dataSource: IUser[]= [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dataSource = this.userService.getUsers();
  }

  clearUserList(){
    this.userService.clearUserList();
    this.dataSource = this.userService.getUsers();
  }
}
