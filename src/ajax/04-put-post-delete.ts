import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.post( url, {
    id: 1,
    nombre: 'Ruben'
},
{
    'token': 'ABC123'
}).subscribe(console.log);


ajax.put( url, {
    id: 1,
    nombre: 'Ruben'
},
{
    'token': 'ABC123'
}).subscribe(console.log);

// es una forma de tener el metodo en una variable
ajax({
    url: url,
    method: 'GET',
    headers: {
        'token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Ruben'
    }
}).subscribe(console.log);
