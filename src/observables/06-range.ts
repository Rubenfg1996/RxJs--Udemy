import { range, asyncScheduler } from "rxjs";
 
// asyncScheduler hace que sea asincrono
const source$ = range(1,5, asyncScheduler);

console.log('Inicio');

source$.subscribe(console.log)

console.log('Fin');