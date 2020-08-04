
import { of, from } from "rxjs"

// of = toma argumentos y genera una secuencia
// from = toma array, promise, iterable, observable

const observer = {
    next: value => console.log('next:', value),
    complete: () => console.log('Complete')
}

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (let id of miIterable) {
//     console.log(id);
// }
// Lo de arriba comentado hace lo mismo que esto de abajo
from(miIterable).subscribe(observer);


// const sources = from([1,2,3,4,5]);
// const sources = of(...[1,2,3,4,5]);
// const sources = from('Ruben');

// Recogemos la data de la url con fetch para hacer la llamada rest
const source$ = from( fetch('https://api.github.com/users/klerith'));

source$.subscribe( async(resp) => {
    console.log(resp);
    const data = await resp.json()

    console.log(data);
});