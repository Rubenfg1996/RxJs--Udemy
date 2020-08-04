import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

// AUDITTIME cuando se emite un valor y empieza a contar x segundos y emite el ultimo valor una vez pase x segudnos

click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap', val)),
    auditTime(2000)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});
