import { of, from } from 'rxjs';
import { takeUntil, distinct, distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of<string | number>(1,1,1,3,3,2,2,4,4,5,3,1,'1');



// DISTINCTUNTILCHANGED devuelve el valor si es diferente al emitido anterior si el valor a emitir es 2 y el anterior emitido es 1 si lo emite
// si emite 2 y el anterior emitido fue 2 no lo emitiria
numbers$.pipe(
    distinctUntilChanged()
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
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    }
];

from( personajes ).pipe(
    distinctUntilChanged((anterior, actual) => anterior.nombre === actual.nombre)
).subscribe(
    console.log
);

