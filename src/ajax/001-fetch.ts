

const url = 'https://api.github.com/usersxx?per_page=5';

const errores = (response: Response) => {
    // si la respuesta esta mal lanzamos error 
    if(!response.ok) {
        throw new Error (response.statusText);
    }

    return response;
}

// fetch funciona como promesa
const fetchPromesa = fetch(url);

// then es como el next de los observables
// cath es como el error 
fetchPromesa
    // lanzamos la funcion que maneja errores 
    // para que el catch fucnione se tiene que lanzar un throw
    .then( errores)
    // obtenemos info de la url
    .then(resp => resp.json())
    // obtenemos info del body de la anterior info
    .then(data => console.log('data:', data))
    .catch( err => console.warn('error en usuarios' , err))