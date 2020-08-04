import { interval, concat } from "rxjs";
import { take } from "rxjs/operators";


const interval$ = interval(1000);
// CONCAT se subscribe al observable cuando se completa se subscribe al siguiente observable si lo hay
// si no se completa el observable nunca pasara a otro
concat( 
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) )
).subscribe(console.log)