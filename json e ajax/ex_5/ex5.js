/*Exercício 5: Manipulação de JSON Local
Crie um arquivo JSON local com uma lista de produtos. Use AJAX para carregar o arquivo e exibir os 
produtos em uma página HTML, permitindo que o usuário ordene os produtos por nome ou preço.*/

document.addEventListener('DOMContentLoaded', function() {
    const url = 'produtos.json'
    let produtos = []

    function carregarProdutos() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                produtos = data;
                exibirProdutos(produtos);
            })
            .catch(error => {
                console.log(error)
            })
    }

    function exibirProdutos(produtos) {
        const produtosdiv = document.getElementById('produtos')
        produtosdiv.innerHTML = '';

        produtos.forEach(produto => {
            const produtodiv = document.createElement('div')
            produtodiv.className = 'produto';
            produtodiv.innerHTML = `
                <h2> ${produto.nome} </h2>
                <p> Preço: ${produto.preco.toFixed(2)} </p>
            `;
            produtosdiv.appendChild(produtodiv);
        });
    }

    function ordenarPorNome() {
        const produtosOrdenados = [...produtos].sort((a,b) => a.nome.localeCompare(b.nome));
        exibirProdutos(produtosOrdenados);
    }

    function ordenarPorPreco() {
        const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
        exibirProdutos(produtosOrdenados);
    }

    document.querySelector('#ordenarNome').addEventListener('click', ordenarPorNome);
    document.querySelector('#ordenarPreco').addEventListener('click', ordenarPorPreco);

    carregarProdutos();
})