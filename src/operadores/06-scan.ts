import { from } from "rxjs";
import { scan, reduce, map, tap } from 'rxjs/operators';


const numbers = [1,2,3,4,5];

const totalAcumualdor = (acumulador: number, valorActuial: number) => {
    return acumulador + valorActuial;
};

// reduce
from (numbers).pipe(
    reduce (totalAcumualdor, 0)
).subscribe(console.log);

// scan
from (numbers).pipe(
    scan (totalAcumualdor, 0)
).subscribe(console.log);


// redux

interface User {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const user:User[]  = [
    { id: 'Ruben', autenticado: false, token: null },
    { id: 'Ruben', autenticado: true, token: 'ABC' },
    { id: 'Ruben', autenticado: true, token: 'ABC123' }
];

const state$ = from(user).pipe(
    scan<User>( (acc, cur) => {
        return {...acc, ...cur}
    }, {edad: 33})
);

const id$ = state$.pipe(
    tap(console.log),
    map( state => state.id)
);

id$.subscribe(console.log);

