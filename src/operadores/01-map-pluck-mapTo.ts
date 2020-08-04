import { range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

// range(1,5).pipe(
//     map<number, string>( val => (val * 10).toString())
// ).subscribe( console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

// map sirve para obtener data y poder modificarla, hacer operaciones con ella etc
const keyupCode$ = keyUp$.pipe(
    map( event => event.code)
);

// para sacar info de objeto dentro de otro objeto se anida asi
const keyupPluck$ = keyUp$.pipe(
    pluck('target','baseURI')
);
// mapTo tansforma lo que llegue a lo qu ponga entre ()
const mapTo$ = keyUp$.pipe(
    mapTo('tecla presioanda')
);


keyUp$.subscribe( console.log);
keyupCode$.subscribe( code => console.log('map', code));
keyupPluck$.subscribe( code => console.log('pluck', code));
mapTo$.subscribe( code => console.log('mapTo', code));