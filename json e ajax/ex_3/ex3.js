/*Exercício 3: Atualização Dinâmica de Conteúdo
Crie uma página que exiba notícias de uma API externa, como a API de Notícias. Use AJAX para buscar as notícias e 
atualize a página automaticamente em intervalos regulares (por exemplo, a cada 30 segundos).*/

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '97e4cf007bb24ab3873f925f361d6f6d';    
    const url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`;
    let currentIndex = 0;
    let articles = [];

    function fetchNews() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                articles = data.articles;
                displayNews(currentIndex); // Exibe a primeira notícia
            })
            .catch(error => {
                console.error('Erro ao buscar as notícias:', error);
            });
    }

    function displayNews(index) {
        const news = document.querySelector('#news');
        news.innerHTML = ''; // Limpa o conteúdo anterior

        if (articles.length > 0) {
            const article = articles[index];
            const listNews = document.createElement('div');
            listNews.className = 'news-item';
            listNews.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description || 'Sem descrição disponível.'}</p>
            `;
            news.appendChild(listNews);

            // Atualiza o índice para a próxima notícia
            currentIndex = (currentIndex + 1) % articles.length;
        }
    }

    fetchNews(); // Busca as notícias ao carregar a página

    // Alterna as notícias a cada 30 segundos
    setInterval(function() {
        displayNews(currentIndex);
    }, 30000);
});
