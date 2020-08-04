
import { fromEvent } from "rxjs";

// Eventos del DOM
const click$ = fromEvent<MouseEvent>( document, 'click');
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const observer = {
    next: value => console.log('next', value)
}

click$.subscribe( event => {
    console.log(event.x, event.y)
});

// Si sabemos que el objeto que recibimos tiene el key x e y podemos 
// poner ({x,y}) donde los {} es el objeto que recibimos del observable

// click$.subscribe( ({x,y}) => {
//     console.log(x, y)
// });


keyup$.subscribe(event => {
    console.log(event.key)
});