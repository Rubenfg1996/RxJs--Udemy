import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i),
        take(3)
    ) )
)
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('Complete')
// })

// MERGEMAP se subscribe al observable padre y por cada emision del observable padre emite un observable y se subscribe a el y 
// emite esos valores en la salida (en este caso es el interval)
// emite tantos observables como valores le llegan

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();


mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        // coge valores hasta que emite el observable mouseUp
        takeUntil(mouseUp$)
    ))
).subscribe(console.log);