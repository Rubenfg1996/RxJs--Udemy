import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value ),
    error: error => console.warn('error [observer]: ', error ),
    complete: () => console.info('complete [observer]')
}

const observer$ = new Observable<string>( subscriber => {
    // .next emite los datos
    subscriber.next('Hola');
    subscriber.next('Hola');
    subscriber.next('Hola');

    // Forzar error
    // const a = undefined; 
    // a.nombre = 'Ruben';

    subscriber.complete();
});


observer$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error: ', error),
    () => console.log('complete')
);

observer$.subscribe( observer );
