import { of, from } from 'rxjs';
import { takeUntil, distinct } from 'rxjs/operators';

const numbers$ = of(1,1,1,3,3,2,2,4,4,5,3,1);



// DISTINCT devuelve los valores diferentes a los ya emitidos 
numbers$.pipe(
    distinct()
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});

interface Persanoje {
    nombre: string;
}

const personajes: Persanoje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
];
// DISTINCT devuelve los valores diferentes a los ya emitidos pero para objetos devemos compararlos como en el ejemplo de abajo
from( personajes ).pipe(
    distinct( p => p.nombre)
).subscribe(
    console.log
);

