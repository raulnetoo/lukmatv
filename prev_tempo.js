// Função para obter dados da API de previsão do tempo
function getWeatherData(city) {
    const apiKey = '6bf1c1c6827b880293198fb4712ba3e4';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    return fetch(apiUrl)
        .then(response => response.json())
        .catch(error => console.error(error));
}

const weatherDescriptions = {
    'céu limpo': 'Céu limpo',
    'poucas nuvens': 'Poucas nuvens',
    'nuvens dispersas': 'Nuvens',
    'nuvens quebradas': 'Nublado',
    'nublado': 'Nublado',
    'chuva fraca': 'Chuva fraca',
    'chuva': 'Chuva', 
    'trovoada': 'Trovoada',
    'neve': 'Neve',
    'névoa': 'Nublado',
    'algumas nuvens': 'Algumas nuvens',
};

function getWeatherImageURL(description) {
    const weatherImageMap = {
        'céu limpo': 'img/tempo/ceu-limpo.gif',
        'poucas nuvens': 'img/tempo/poucas-nuvens.gif',
        'nuvens dispersas': 'img/tempo/nuvens-dispersas.gif',
        'nuvens quebradas': 'img/tempo/nuvens-dispersas.gif',
        'nublado': 'img/tempo/nuvens-dispersas.gif',
        'chuva fraca': 'img/tempo/chuva-fraca.gif',
        'chuva': 'img/tempo/chuva.gif',
        'trovoada': 'img/tempo/trovoada.gif',
        'neve': 'img/tempo/neve.gif',
        'névoa': 'img/tempo/nevoa.gif',
        'algumas nuvens': 'img/tempo/nuvens-dispersas.gif'
    };

    return weatherImageMap[description] || 'default.png';
}

function updateWeatherWidget() {
    const weatherContainer = document.getElementById('prev_tempo');

    getWeatherData('São José do Rio Preto').then(data => {
        const temperature = data.main.temp.toFixed(1);
        const description = data.weather[0].description;
        const translatedDescription = weatherDescriptions[description] || description;
        const weatherImage = getWeatherImageURL(description);

        const weatherHTML = '<div class="prev_tempo_div" style="text-align: center;">' +
            `<img src="${weatherImage}" alt="Condições climáticas" width="100" height="100">` +
            `<p style="color: white; font-size: 32px; margin: 0">${temperature.substring(0, 2)}°C</p>` +
            `<p style="color: white; font-size: 26px">${translatedDescription}</p>` +
            '</div>';

        weatherContainer.innerHTML = weatherHTML;
    });
}

updateWeatherWidget();
