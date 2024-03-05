import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

/**
 * A decorator that defines metadata about the component, including its selector, template, and style URLs.
 */
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})

/**
  * A class constructor that initializes the this.users array to an empty array.
  * It takes a single argument, userService, which is an instance of the UserService service.
  */
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
    this.users = [];
  }

  /**
   * Initializes the component by subscribing to the user service to retrieve all users.
   * The userService is injected into the component, and the findAll method is called to retrieve all the users.
   */
  ngOnInit() {
    this.userService.findAll().subscribe((data) => {
      this.users = data;
    });
  }
}
