import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  user: User;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
    this.user = new User('', '', '');
  }

  /**
 * Saves the user to the backend.
 *
 * @param user - the user to save
 * @returns a promise that resolves when the user is saved
 */
  onSubmit() {
    this.userService.save(this.user).subscribe(() => this.gotoUserList());
  }

  /**
 * navigates to the user list view
 */
  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
