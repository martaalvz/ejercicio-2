import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
    public Nombre: string;
    public Apellidos: string;
    public edad: number;
    public DNI: string;
    public Cumpleanos: Date;
    public colorFavorito: string;
    public Sexo: string;
    public Direcciones: Direccion[];
    public Mails: Mail[];
    public Telefonos: Telefono[];
    public Notas: string | null;

    constructor(
        Nombre: string,
        Apellidos: string,
        edad: number,
        DNI: string,
        Cumpleanos: Date,
        colorFavorito: string,
        Sexo: string,
        Direcciones: Direccion[],
        Mails: Mail[],
        Telefonos: Telefono[],
        Notas: string | null
    ) {
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.edad = edad;
        this.DNI = DNI;
        this.Cumpleanos = Cumpleanos;
        this.colorFavorito = colorFavorito;
        this.Sexo = Sexo;
        this.Direcciones = Direcciones;
        this.Mails = Mails;
        this.Telefonos = Telefonos;
        this.Notas = Notas;
    }

    public anadirMail(mail : Mail){
        this.Mails.push(mail);
    }

    public anadirDireccion(direccion : Direccion){
        this.Direcciones.push(direccion);
    }

    public anadirTelefono(telefono : Telefono){
        this.Telefonos.push(telefono);
    }
}
