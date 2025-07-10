import { ExperienciaLaboral } from './ExperienciaLaboral';
import { Usuario } from './Usuario';

export interface Empleado extends Usuario {
  experiencias: ExperienciaLaboral[];
}
