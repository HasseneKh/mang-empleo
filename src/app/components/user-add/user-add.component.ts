import { Component } from '@angular/core';
import { UserFromComponent } from '../user-from/user-from.component';

@Component({
  selector: 'app-user-add',
  imports: [UserFromComponent],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss',
})
export class UserAddComponent {}
