import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

// FIRST devuelve el primer valor que cumpla la condicion si tiene condicion y sino tiene devuelve el primero
click$.pipe(
    first( event => event.clientY >= 150 )
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});

