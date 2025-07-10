import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete',

  imports: [CommonModule, MatButtonModule, MatDialogContent, MatDialogActions],
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.scss',
})
export class UserDeleteComponent {
  constructor(public dialogRef: MatDialogRef<UserDeleteComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
