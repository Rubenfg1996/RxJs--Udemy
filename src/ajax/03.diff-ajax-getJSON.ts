import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbins.org/delay/1';

const atrapaError = (err:AjaxError) => {
    console.warn('error en:', err.message);
    // en caso de error retorna un observable
    return of({
        ok: false,
        usuarios: []
    });
};
// una forma de manejar error
// const obs$ = ajax.getJSON(url).pipe(
//     catchError(atrapaError)
// );

// const obs2$ = ajax(url).pipe(
//     catchError(atrapaError)
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// otra forma de manejar error
// si implementamos el catchError se lanza el error de la funcion
obs$.pipe(
    catchError(atrapaError)
).subscribe({
    next: val => console.log('next: ', val),
    error: err => console.warn('error en subs:', err),
    complete: () => console.log('complete')});
obs2$.subscribe( data => console.log('AJAX:', data));

