import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('complete')
}

const interval$ = new Observable<number>( subs => {
    const interval = setInterval( 
        () => subs.next(Math.random()), 1000
    );

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

// 1- casteo multiple
// 2- es un observer
// 3- tiene next error y complete

// CON SUBJECT EL VALOR DEL NEXT ES EL MISMO APRA LOS
// DIFERENTES SUBSCRIBERS QUE SE SUBSCRIBAN

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

// const subs1 = interval$.subscribe( rnd => console.log('subs1:', rnd) );
// const subs2 = interval$.subscribe( rnd => console.log('subs2:', rnd) );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);