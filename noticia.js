const newsContainer = document.querySelector('.not_interna');
const newsForm = document.getElementById('addNewsForm');
const newsTitleInput = document.getElementById('newsTitle');
const newsDescriptionInput = document.getElementById('newsDescription');
const newsImageInput = document.getElementById('newsImage');

const news = [
    {
        title: 'Corinthians fecha patrocínio com Lukma',
        description: 'Empresa vai exibir a sua marca na barra traseira do calção dos atletas do futebol masculino profissional',
        image: 'img/noticia/not01.jpeg'
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
];

let currentNewsIndex = 0;

function showNextNews() {
    const currentNews = news[currentNewsIndex];

    const newsElement = document.createElement('div');
    newsElement.classList.add('news-item');
    newsElement.innerHTML = `
      <img src="${currentNews.image}" alt="Imagem da Notícia" width="200" height="250">
      <h2>${currentNews.title}</h2>
      <p>${currentNews.description}</p>
    `;
  
    newsContainer.innerHTML = '';
    newsContainer.appendChild(newsElement);
  
    currentNewsIndex = (currentNewsIndex + 1) % news.length;
}

function addNews(event) {
  event.preventDefault();

  const newNews = {
    title: newsTitleInput.value,
    description: newsDescriptionInput.value,
    image: newsImageInput.value
  };

  news.push(newNews);

  newsTitleInput.value = '';
  newsDescriptionInput.value = '';
  newsImageInput.value = '';

  // Opcionalmente, você pode chamar a função showNextNews() novamente para atualizar a exibição
}

newsForm.addEventListener('submit', addNews);
showNextNews();
setInterval(showNextNews, 20000);
