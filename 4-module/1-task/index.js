'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let ul = document.createElement('ul');

    for (let item of friends) {
        let li = document.createElement('li');
        li.innerText = `${item.firstName} ${item.lastName}`;
        ul.appendChild(li);
    }

    return ul;
}
