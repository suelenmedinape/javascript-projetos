/*Exercício 3: Manipulação de Atributos
Crie uma página com uma imagem e dois botões. Use JavaScript para:
Trocar a imagem ao clicar em um dos botões.
Restaurar a imagem original ao clicar no outro botão.
Alterar o tamanho da imagem ao clicar duas vezes nela.*/

function carregar() {
    let manhabtn = document.querySelector('#manha');
    let tardebtn = document.querySelector('#tarde');
    let noitebtn = document.querySelector('#noite');
    let voltarbtn = document.querySelector('#voltar');
    let img = document.querySelector('#imagem')
        
    manhabtn.addEventListener('click', function () {
        document.body.style.background = '#E2CD9F'
        img.src = '2.png';
    });

    tardebtn.addEventListener('click', function () {
        document.body.style.background = '#B9846F'
        img.src = '1.png';
    });

    noitebtn.addEventListener('click', function () {
        document.body.style.background = '#515154'
        img.src = '3.png';
    });

    voltarbtn.addEventListener('click', function () {
        document.body.style.background = '#87fff7'
        img.src = 'horario.png';
    });

    let estadoImg = false; //rastreia o tamanho da imagem

    //caso a imagem seja precionada duas vezes
    img.addEventListener('dblclick', function () {
        if (estadoImg) {
            img.style.width = '300px';
            img.style.height = '300px';
            estadoImg = false;
        } else {
            img.style.width = '200px';
            img.style.height = '200px';
            estadoImg = true;
        }
        
    });
}
    