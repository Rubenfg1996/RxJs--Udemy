import { interval } from "rxjs";
import { take, reduce, tap } from 'rxjs/operators';

const totalReducer = (acumulador: number, valorActuial: number) => {
    return acumulador + valorActuial;
};
// reduce aplica una funcion acumuladora y empieza desde el valor que le pongas como segundo parametro
interval(1000).pipe(
    take(3),
    tap( console.log ),
    reduce(totalReducer, 5)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})