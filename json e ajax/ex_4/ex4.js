/*Exercício 4: Filtro de Dados com AJAX
Implemente uma funcionalidade de busca em uma tabela de dados. Use AJAX para buscar os dados de uma API e
 permitir que o usuário filtre os resultados em tempo real conforme digita no campo de busca.*/

 document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://jsonplaceholder.typicode.com/users'; // URL da API
    let users = [];

    function fetchData() {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                users = data;
                console.log('Dados recebidos:', users); // Debug: Exibir os dados recebidos
                exibeTabela(users); // Exibe a tabela com os dados recebidos
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }

    function exibeTabela(data) {
        const tableBody = document.querySelector('#tabela tbody');
        tableBody.innerHTML = ''; // Limpa o conteúdo anterior da tabela

        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            tableBody.appendChild(row);
        });
        console.log('Tabela atualizada'); // Debug: Exibir mensagem de tabela atualizada
    }

    function filtro(query) {
        const filtrarData = users.filter(user => {
            return user.name.toLowerCase().includes(query.toLowerCase()) ||
                   user.email.toLowerCase().includes(query.toLowerCase());
        });
        exibeTabela(filtrarData); // Exibe a tabela filtrada
    }

    const pesquisar = document.querySelector('#pesquisa');
    pesquisar.addEventListener('input', function() {
        const query = pesquisar.value;
        filtro(query);
    });

    fetchData(); // Busca os dados da API ao carregar a página
});

