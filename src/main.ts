import { Direccion } from "./direccion";
import { Persona } from "./persona";
import { Telefono } from "./telefono";
import { Mail } from "./mail";

export default function main() {
    let personas: Persona[] = [];

    let persona1 = new Persona(
        'Juan',
        'Lopez Lopez',
        24,
        '11111111A',
        new Date(1999, 1, 1),
        'Rosa',
        'Hombre',
        [new Direccion(
            'Calle Uno',
            1,
            1,
            'A',
            12345,
            'Madrid',
            'Comunidad de Madrid'
        )],
        [new Mail(
            'Personal',
            'juan@juan.me'

        )],
        [new Telefono(
            'Casa',
            611111111
        )],
        'Asdfghjkl'
    );
    personas.push(persona1)

    let persona2 = new Persona(
        'Sara',
        'Garcia Garcia',
        24,
        '11111111B',
        new Date(1999, 1, 1),
        'Verde',
        'Mujer',
        [new Direccion(
            'Calle Dos',
            2,
            2,
            'B',
            67890,
            'Malaga',
            'Andalucia'
        )],
        [new Mail(
            'Trabajo',
            'Sara@Sara.me'

        )],
        [new Telefono(
            'Movil',
            622222222
        )],
        null
    );
    personas.push(persona2)

    let persona3 = new Persona(
        'Maria',
        'Gomez Gomez',
        24,
        '11111111C',
        new Date(1999, 1, 1),
        'Rojo',
        'Mujer',
        [new Direccion(
            'Calle Tres',
            3,
            3,
            'C',
            12345,
            'Madrid',
            'Comunidad de Madrid'
        )],
        [new Mail(
            'Personal',
            'sara@sara.me'

        )],
        [new Telefono(
            'Casa',
            633333333
        )],
        'Asdfghjkl'
    );
    personas.push(persona3)

    console.log(persona1);
    console.log(persona2);
    console.log(persona3);

    let personaelegida = personas.find(x => x.DNI === '11111111B');
    personaelegida?.anadirDireccion(new Direccion(
        'Calle Madrid',
        23,
        42,
        'A',
        33401,
        'Barcelona',
        'Cataluña'
    ));
    personaelegida?.anadirMail(new Mail(
        'Personal',
        'sara83@hotmail.com'
    ));
    personaelegida?.anadirTelefono(new Telefono(
        'Casa',
        984334455
    ))

    console.log(personaelegida);
}