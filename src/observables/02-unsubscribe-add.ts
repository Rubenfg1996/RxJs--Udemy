import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('complete')
}

const interval$ = new Observable<number>( subs => {
    let cont = 1;

    const interval = setInterval( () => {
        subs.next(cont++);
    },1000);

    setTimeout( () => {
        subs.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscription1 = interval$.subscribe( observer);
const subscription2 = interval$.subscribe( observer);
const subscription3 = interval$.subscribe( observer);

// Con .add encadenas subcripciones
subscription1.add(subscription2)
             .add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe(); 
    // subscription2.unsubscribe(); 
    // subscription3.unsubscribe(); 

    console.log('Completado timeout');
},3000);

