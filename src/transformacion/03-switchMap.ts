import { fromEvent, Observable } from 'rxjs';
import { debounceTime , pluck, mergeMap, switchMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/githubUser.interface';
import { GithubUsers } from '../interfaces/github-user.interface';

// referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// helpers

const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = '';

    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const link = document.createElement('a');

        link.href = user.html_url;
        link.text = 'Ver página';
        link.target = '_blank';

        li.append(img);
        li.append(user.login + ' ');
        li.append(link);

        orderList.append(li); 
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>( 'target', 'value'),
    mergeMap<string, Observable<GithubUsers>>( text => {
        return ajax.getJSON(`https://api.github.com/search/users?q=${text}`);
    }),
    // filtramos solo los datos del key items
    pluck<GithubUsers, GithubUser[]>('items')
)
// .subscribe( showUsers);

// SWITCHMAP por cada valor que recibe crea un nuevo observable pero si hay mas de 1 ya activo lo completa y solo se subscribe al observable mas nuevo esa es la gran diferencia con el mergemap
const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck<KeyboardEvent, string>( 'target', 'value'),
    switchMap( text => ajax.getJSON(url + text))
).subscribe(console.log);