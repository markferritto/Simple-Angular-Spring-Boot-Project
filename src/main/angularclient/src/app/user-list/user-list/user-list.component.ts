import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
