import { fromEvent, asyncScheduler } from 'rxjs';
import { pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

// THROTTLETIME emite el valor y espera x segundos para emitir otro
// si escribo a lo emite y empieza a espera x segundos si escribo algo antes de esos x segundos lo ignora

click$.pipe(
    throttleTime(3000)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});

// EJEMPLO 2

const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent( input, 'keyup' );

// devuelve data al 1 segundo de lo que escribimos en el input y si es distintod el anterior con el distinctUntilChanged
// con leading y trailing a true emite el primero valor y el ultimo
input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);