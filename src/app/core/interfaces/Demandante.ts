import { Estudio } from './Estudio';
import { Usuario } from './Usuario';

export interface Demandante extends Usuario {
  estudios: Estudio[];
}
