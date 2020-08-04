import { fromEvent, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';


// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');
// // COMBINELATEST combina los valores de los observables pero combina los ultimos valores
// combineLatest( 
//     keyup$.pipe( pluck('type') ), click$.pipe( pluck('type') )
// ).subscribe(console.log)

// COMBINELATEST combina los valores de los observables pero combina los ultimos valores

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '***';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// helper

const getInputStream = (elem:HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck('target', 'value')
    )
}

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log)
