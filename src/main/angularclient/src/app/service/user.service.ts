import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

/**
The @Injectable decorator is used to mark the UserService class as a service that can be injected into other components and services. 
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  
/**
The HttpClient service is used for making HTTP requests to the backend server. 
 */
  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/users';
  }

/**
Returns a list of all users.

@returns An array of user objects.
 */
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  /**
 * Saves a user to the server.
 *
 * @param user - the user to save
 * @returns the saved user
 */
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
