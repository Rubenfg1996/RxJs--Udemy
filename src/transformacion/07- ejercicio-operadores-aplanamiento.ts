import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// helper

const peticionLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
                                        .pipe(
                                            pluck('response', 'token'),
                                            catchError( err => of('error'))
                                        );

// FORMULARIO HTML
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuraciones campos
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'pass';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Entrar';

form.append( inputEmail, inputPass, submitBtn);
document.querySelector('body').append( form );

// observables
const submitForm$ = fromEvent<Event>( form, 'submit')
                        .pipe(
                            tap(event => event.preventDefault()),
                            map( event => ({
                                email: event.target[0].value,
                                password: event.target[1].value,
                            })),
                            // MERGEMAP puede tener activos todos los observables internos que se quiera
                            // mergeMap( userPass => peticionLogin(userPass))
                            // SWITCHMAP solo tiene activo el ultimo observable creado los antiguos los cancela
                            // switchMap( userPass => peticionLogin(userPass))
                            // EXHAUSTMAP ignora todos los observables internos mientras uno este activo
                            exhaustMap( userPass => peticionLogin(userPass))
                            // otra opcion mas rapido de hacerlo
                            // si no pones nada el primer valor que reciba el mergemap se lo apsa a la funcion
                            // mergeMap( peticionLogin)
                        );

submitForm$.subscribe( token => {
    console.log(token)
} );
