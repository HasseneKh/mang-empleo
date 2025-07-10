// src/app/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../core/interfaces/Usuario';
import { UserService } from '../../core/services/userService';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatCardModule,
  ],
})
export class UserListComponent implements OnInit {
  usuarios: Usuario[] = [];
  displayedColumns: string[] = [
    'tipo',
    'nifPasaporte',
    'nombre',
    'primerApellido',
    'genero',
    'fechaNacimiento',
    'acciones',
  ];

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  onView(usuario: Usuario) {
    alert(`Voir utilisateur: ${usuario.nombre} ${usuario.primerApellido}`);
  }

  onEdit(usuario: Usuario) {
    alert(`Modifier utilisateur: ${usuario.nombre} ${usuario.primerApellido}`);
  }

  onAdd() {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // // delete id form json
        // delete result.id;
        // this.warehouseService.addWarehouse(result).subscribe(() => {
        //   this.loadWarehouses();
        // });
      }
    });
  }

  onDelete(usuario: Usuario) {
    const dialogRefDeleteW = this.dialog.open(UserDeleteComponent, {});

    dialogRefDeleteW.afterClosed().subscribe((result: any) => {
      if (result) {
        this.usuarios = this.usuarios.filter(
          (u) => u.documento !== usuario.documento
        );
      }
    });
  }
}
