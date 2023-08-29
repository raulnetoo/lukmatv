const newsContainer = document.querySelector('.not_interna');
const news = [
  {
    title: 'Corinthians fecha patrocínio com Lukma',
    description: 'Empresa vai exibir a sua marca na barra traseira do calção dos atletas do futebol masculino profissional',
    image: 'img/noticia/not01.jpg'
  },
  {
    title: 'Embaixador da Multieletrica',
    description: 'Fabiano Hayasaki arquiteto se torna Embaixador oficial da Multieletrica.',
    image: 'img/noticia/not02.png'
  },
  {
    title: 'Garoto Propaganda',
    description: 'Neto o craque, ex jogador, comentarista é o novo Garoto Propaganda da Multieletrica.',
    image: 'img/noticia/not03.jpg'
  },
  // ... Adicione mais notícias conforme necessário
];

let currentNewsIndex = 0;

function showNextNews() {
  const currentNews = news[currentNewsIndex];

  const newsElement = document.createElement('div');
  newsElement.classList.add('news-item');
  newsElement.innerHTML = `
    <img src="${currentNews.image}" alt="Imagem da Notícia" width="200" height="200">
    <h2>${currentNews.title}</h2>
    <p>${currentNews.description}</p>
  `;

  newsContainer.innerHTML = '';
  newsContainer.appendChild(newsElement);

  currentNewsIndex = (currentNewsIndex + 1) % news.length;
}

showNextNews(); // Mostra a primeira notícia imediatamente

setInterval(showNextNews, 20000); // Mostra a próxima notícia a cada 1 minuto
