import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';

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

// MERGEALL se subscribe a todos los observables y devuelve los valores que devuelvan
input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>( 'target', 'value'),
    map<string, Observable<GithubUsers>>( text => {
        return ajax.getJSON(`https://api.github.com/search/users?q=${text}`);
    }),
    // devuelve los valores que emite el observable
    mergeAll<GithubUsers>(),
    // filtramos solo los datos del key items
    pluck<GithubUsers, GithubUser[]>('items')
).subscribe( showUsers);
