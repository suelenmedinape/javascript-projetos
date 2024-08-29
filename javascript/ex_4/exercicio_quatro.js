/*Exercício 4: Criação de Elementos Dinâmicos
Crie uma página que tenha um formulário com campos de texto e um botão de "Adicionar". Use JavaScript para:
Criar novos elementos de texto e adicioná-los à página cada vez que o usuário clicar no botão "Adicionar".
Implementar uma funcionalidade que permita ao usuário remover os elementos criados clicando em um botão de "Remover".*/

var add = document.querySelector('#add_tarefa');

add.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    criar();
});

function pegarTask() {
    return document.querySelector('#tasks'); // Corrigi para pegar o elemento correto
}

function deleteItem(evt) {
    evt.target.parentNode.remove(); // Remove o item da lista
}

function criarTask(text) {
    // Criar o item da lista
    let li = document.createElement('li');
    let textItem = document.createTextNode(text);    

    // Criar o botão de exclusão
    let btn = document.createElement('button');
    let textBtn = document.createTextNode('deletar');
    btn.addEventListener('click', deleteItem);

    // Adiciona espaço entre o texto e o botão
    btn.style.marginLeft = '10px';

    btn.appendChild(textBtn);
    li.appendChild(textItem);
    li.appendChild(btn);

    return li;
}

function inputReset(input) {
    input.value = ''; // Reseta o valor do input
}

function criar() {
    var input = document.querySelector('#tarefa'); // Corrigido para pegar o valor do input corretamente
    var tarefa = input.value.trim();
    
    if (tarefa !== '') { // Verifica se a tarefa não está vazia
        var taskList = pegarTask(); 
        taskList.appendChild(criarTask(tarefa));
        inputReset(input); // Passa o input como argumento
    }
}
