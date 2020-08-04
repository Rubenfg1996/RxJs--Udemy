import { from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';


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
// DISTINCTUNTILKEYCHANGED devuelve los valores del key que es diferente al anterior
from( personajes ).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(
    console.log
);

