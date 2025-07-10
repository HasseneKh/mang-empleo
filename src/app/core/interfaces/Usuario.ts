import { Direccion } from './Direccion';

export interface Usuario {
  id: number;
  nombre: string;
  primerApellido: string;
  segundoApellido?: string;
  genero: string;
  fechaNacimiento: string;
  documento: string;
  direccion: Direccion;
}
