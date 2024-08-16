/*Exercício 2: Envio de Dados com AJAX
Crie um formulário simples de contato com campos como nome, e-mail e mensagem. Use AJAX para enviar os dados para um 
servidor simulado (pode ser usando JSONPlaceholder) e exiba uma mensagem de sucesso ou erro com base na resposta do servidor.*/

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contactForm');
    const responseMessage = document.querySelector('#responseMenssage');

    form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            mensagem: form.mensagem.value
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.className = 'message success';
            responseMessage.textContent = 'Mensagem Enviada com Sucesso!';
            responseMessage.computedStyleMap.display = 'block';
        })
        .catch(error => {
            responseMessage.className = 'message error';
            responseMessage.textContent = 'Ocorreu um erro ao enviar a mensagem';
            responseMessage.computedStyleMap.display = 'block';
        });
    });
});