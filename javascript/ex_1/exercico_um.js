/*Exercício 1: Manipulação de Elementos HTML
Crie uma página HTML com uma lista de itens (<ul> e <li>). Use JavaScript para:
Adicionar um novo item à lista quando o usuário clicar em um botão.
Remover o último item da lista com outro botão.
Alterar o texto de um item específico ao clicar em um terceiro botão.
*/

var tarefa = document.querySelector('#tarefa');
var add_tarefa = document.querySelector('#add_tarefa');

add_tarefa.addEventListener('click', criarLista);

function getTarefa() {
    return document.querySelector('#lista');
}

function deletar(evt) {
    evt.target.parentNode.remove();
}

function editar(evt) {
    let li = evt.target.parentNode;
    let currentText = li.firstChild.textContent;
    let novoTexto = prompt('Digite o novo texto:', currentText);

    if (novoTexto === null) {
        // O usuário clicou em "Cancelar"
        return;
    } else if (novoTexto.trim() === '') {
        // O usuário deixou o campo em branco
        alert('Não é possível ficar em branco');
    } else {
        // O usuário forneceu um texto válido
        li.firstChild.textContent = novoTexto.trim();
    }
}

function criarTarefa(text) {
    let li = document.createElement('li');
    let textItem = document.createTextNode(text);

    let button = document.createElement('button');
    button.textContent = 'deletar';
    button.addEventListener('click', deletar);

    let buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'editar';
    buttonEdit.addEventListener('click', editar);

    li.appendChild(textItem);
    li.appendChild(button);
    li.appendChild(buttonEdit);

    return li;
}

function limparInput(input) {
    input.value = ' ';
}

function criarLista() {
    var input = document.querySelector('#tarefa');
    var text = input.value.trim();
    var tarefa = getTarefa();

    tarefa.appendChild(criarTarefa(text));
    limparInput(input);
}