export class Direccion {
    public Calle: string;
    public Numero: number;
    public Piso: number;
    public Letra: string;
    public Codigopostal: number;
    public Poblacion: string;
    public provincia: string;

    constructor(
        Calle: string,
        Numero: number,
        Piso: number,
        Letra: string,
        Codigopostal: number,
        Poblacion: string,
        provincia: string
    ) {
        this.Calle = Calle;
        this.Numero = Numero;
        this.Piso = Piso;
        this.Letra = Letra;
        this.Codigopostal = Codigopostal;
        this.Poblacion = Poblacion;
        this.provincia = provincia;
    }
}