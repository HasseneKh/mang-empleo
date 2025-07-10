import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usersList',
    pathMatch: 'full',
  },
  {
    path: 'usersList',
    component: UserListComponent,
  },
];
