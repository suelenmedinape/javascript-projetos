/*Exercício 1: Consumo de API com JSON e AJAX
Crie uma página HTML que exiba uma lista de usuários. Utilize AJAX para consumir uma API pública que retorne dados no 
formato JSON (por exemplo, a API de Usuários Random), e mostre os dados, como nome e e-mail, na página.*/

document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://randomuser.me/api/?results=10';

    const options = {method: 'get'};

    fetch(url, options)
        .then(function (response) {
            return response.json()
                .then (function (data) {
                    users(data.results);
                });
        })
        .catch(function (err) {
            console.log(err);
        });

    function users(users) {
        const list = document.querySelector('#lista');
        users.forEach(user => {
            const listItem = document.createElement('li')
            listItem.className = 'user-item'
            listItem.innerHTML = `
                <strong>Nome: </strong> ${user.name.first} ${user.name.last} <br>
                <strong> Email: </strong> ${user.email}
            `;
            list.appendChild(listItem);
        });
    }
})
