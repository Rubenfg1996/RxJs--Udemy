import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

// DEBOUNCETIME emite el valor tras el tiempo que le indiquemos entr ()
// pero si durante ese tiempo se emite otro valor el anterior valor se omite y se emitiria el nuevo tras x segundos
click$.pipe(
    debounceTime(3000)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});

// EJEMPLO 2

const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent( input, 'keyup' );

// devuelve data al 1 segundo de lo que escribimos en el input y si es distintod el anterior con el distinctUntilChanged
input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);