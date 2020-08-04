import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

// STARTWITH cuando comience la subscripcion lo primero en emitir sera lo qu esta entre ()
// ENDWITH cuando vaya a completarse el observable emite lo que este entre ()
const numbers$ = of(1,2,3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);

numbers$.subscribe(console.log);