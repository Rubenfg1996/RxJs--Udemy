import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

// TAKEWHILE devuelve los valores mientras cumpla la condicion
click$.pipe(
    // Esta forma de map devuelve solo los valores que le especificamos en este caso x e y
    map(({x, y}) => ({x, y})),
    // El tercer valor de takeWhile sirve para devolver tambien el valor que se salga de la condicion
    // en este caso imprime el valor superior a 150 y se completa el observable
    takeWhile(({y}) => y < 150, true)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});

