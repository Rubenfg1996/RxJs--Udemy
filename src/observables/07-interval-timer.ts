import { interval, timer } from "rxjs"


const observer = {
    next: value => console.log('next:', value),
    complete: () => console.log('Compelte')
}

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);

// El interval mustra numeros empezando en cero cada 1 segundo
// o lo que le pongamos
const interval$ = interval(1000);
// Este timer es como un interval que empiza a los 2 segundos
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log('incio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');