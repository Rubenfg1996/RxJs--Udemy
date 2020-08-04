import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

// SAMPLE emite valor si el observable 2º se dispara

interval$.pipe(
    sample(click$)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});
