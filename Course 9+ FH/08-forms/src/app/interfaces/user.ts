export interface User {
  nombre: string;
  apellido: string;
  correo: string;
  direccion: {
    direccion: string;
    ciudad: string;
    casa: string;
  };
  pais: string;
  genero: string;
}
