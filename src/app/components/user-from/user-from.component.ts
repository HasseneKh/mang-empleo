import { CommonModule } from '@angular/common';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Usuario } from '../../core/interfaces/Usuario';

@Component({
  selector: 'app-user-from',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogActions,
  ],
  templateUrl: './user-from.component.html',
  styleUrl: './user-from.component.scss',
})
export class UserFromComponent {
  usario: Usuario = {
    id: 0,
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    genero: '',
    fechaNacimiento: '',
    documento: '',
    direccion: {
      calle: '',
      numero: '',
      puerta: '',
      codigoPostal: '',
      ciudad: '',
    },
  };
  @Input() mode: 'add' | 'edit' | 'view' = 'view';

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  onSubmit(): void {
    this.save.emit(this.usario);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
