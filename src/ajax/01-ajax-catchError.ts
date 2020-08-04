import { ajax, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const atrapaError = (err:AjaxError) => {
    console.warn('error en:', err.response);
    // en caso de error retorna un observable de nada
    return of([]);
};

// CATCHERROR atrapa los error que emite el observable
ajax( url ).pipe(
    map( resp => resp.response),
    catchError( atrapaError ) 
).subscribe(console.log);

