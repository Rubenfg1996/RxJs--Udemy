import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

// SAMPLETIME cuando se subscribe alguien empieza a contar los segundos y emite el ultimo valor emitido cada x segundos

click$.pipe(
    sampleTime(2000),
    map(({x,y}) => ({x,y}))
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});
