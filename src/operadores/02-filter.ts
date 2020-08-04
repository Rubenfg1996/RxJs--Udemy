import { range, from, fromEvent } from 'rxjs';
import { filter, pluck, map } from 'rxjs/operators';

range(1,10).pipe(
    filter( val => val % 2 === 1)
).subscribe( console.log);


range(1,10).pipe(
    filter( (val, idx) => {
        console.log('index',idx)
        return val % 2 === 1
    })
).subscribe( console.log);

interface Persoanje {
    tipo: string,
    nombre: string
}

const personajes: Persoanje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

from(personajes).pipe(
    filter( val => val.tipo == 'heroe')
).subscribe( val => console.log(val.nombre));
// capturamos solo las teclas enter
const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup')
    .pipe(
        map( event => event.code),
        filter( code => code === 'Enter' )
    );

keyUp$.subscribe(console.log)