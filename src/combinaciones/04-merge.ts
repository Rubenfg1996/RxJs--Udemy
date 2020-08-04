import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');
// MERGE se puede subscribir a varios observables a la vez y emite el valor de ambos
// para completar la subscripcion se deben de completar todos los observables subscritos
// la salida son los dos observables
merge( 
    keyup$.pipe( pluck('type') ), click$.pipe( pluck('type') )
).subscribe(console.log)