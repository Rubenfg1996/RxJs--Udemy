import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap, take, concatMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent(document, 'click');

// CONCATMAP por cada valor que recibe crea un observable interno y si recibe otro valor crea otro observable pero lo pone en cola y se ejecuta cuando el observable que va antes se completa
click$.pipe(
    concatMap( () => interval$)
).subscribe(console.log)

