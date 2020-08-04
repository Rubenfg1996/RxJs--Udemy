import { fromEvent, interval } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent(document, 'click');

// EXHAUSTMAP por cada valor recibido crea un nuevo observable interno pero si durante este observable interno esta activo y le llega un valor nuevo en vez de crear un nuevo observable como el resto lo ignora
// solo emita valores de los observable internos si no tiene ninguno activo
click$.pipe(
    exhaustMap( () => interval$)
).subscribe(console.log)

