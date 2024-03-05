import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form/user-form.component';

/**
 * Defines the routes for the application.
 * It is an array of objects, where each object represents a route.
 * path: The URL path of the route.
 * component: The component that should be loaded when the route is matched.
 */
export const routes: Routes = [
  { path: 'users', component: UserListComponent }, //user list page (/users)
  { path: 'adduser', component: UserFormComponent } //user form page (/adduser)
];

/**
 * The @NgModule decorator is used to define a module in Angular.
 * Imports the RouterModule and configures it with the application's routes.
 * The forRoot method is a static method of RouterModule that is used to configure the router at the root level of the application.
 * It takes an array of route definitions (routes) as its argument.
 * Exports the RouterModule so that it can be imported by other modules in the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }