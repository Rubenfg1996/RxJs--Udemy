import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = "Detener timer";
document.querySelector('body').append(boton);


// SKIP devuelve valores despues de que paso el valor que pone entre ()
// en este caso emite el 2 segundo valor porque el primero lo omite 
const clickBtn$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    skip(1)
);
// const clickBtn$ = fromEvent<MouseEvent>(boton, 'click');
const counter$ = interval(1000);


// TAKEUNTIL devuelve valores hasta que el observable entre () emita el primer valor 
counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});

