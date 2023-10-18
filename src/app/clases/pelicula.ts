export class Pelicula {
    public id: number;
    public nombre: string;
    public tipo: string;
    public fechaEstreno: Date = new Date();
    public cantidadPublico: number;
    public carteleraFoto: string;

    constructor(id: number, nombre: string, tipo: string, fechaEstreno: Date, cantidadPublico: number, carteleraFoto: string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.carteleraFoto = carteleraFoto;
    }
}
