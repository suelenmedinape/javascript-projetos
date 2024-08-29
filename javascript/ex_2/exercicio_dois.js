/*Exercício 2: Alteração de Estilos
Crie uma página com três caixas (<div>). Use JavaScript para:
Mudar a cor de fundo de uma caixa quando o mouse passar sobre ela.
Restaurar a cor original quando o mouse sair da caixa.
Adicionar uma borda à caixa clicada.
*/
//mouseenter	O evento ocorre quando o ponteiro é movido para um elemento
//mouseleave	O evento ocorre quando o ponteiro é movido para fora de um elemento

let div1 = document.querySelector('#div1');
div1.addEventListener('mouseenter', entrou);
div1.addEventListener('mouseleave', saiu);
div1.addEventListener('click', clicou);

function entrou() {
    div1.innerHTML = 'Entrou!'
    div1.style.background = 'orange';
}

function saiu() {
    div1.innerHTML = 'Saiu!'
    div1.style.background = 'red';
}

function clicou() {
    div1.style.border = '2px solid black';
}