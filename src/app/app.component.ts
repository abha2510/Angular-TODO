import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav style="background-color: palevioletred;color: white;height:50px;display: flex;justify-content:space-evenly">
  <a style="text-decoration: none;color:white ;font-size: 20px; margin-top: 10px;" routerLink="/todos" routerLinkActive="active">Todo List</a>
  <a style="text-decoration: none;color:white ;font-size: 20px; margin-top: 10px;" routerLink="/create" routerLinkActive="active">Create Todo</a>
</nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
