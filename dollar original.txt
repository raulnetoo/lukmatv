const exchangeRateElement = document.getElementById('dollar_hoje');

async function fetchExchangeRate() {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const exchangeRateBRLtoUSD = data.rates.BRL.toFixed(2);

    const brlFlag = document.createElement('img');
    brlFlag.src = 'img/br.png'; // Substitua pelo caminho da sua imagem do Brasil
    brlFlag.alt = 'Bandeira do Brasil';
    brlFlag.classList.add('flag-icon');

    const usdFlag = document.createElement('img');
    usdFlag.src = 'img/us.png'; // Substitua pelo caminho da sua imagem dos EUA
    usdFlag.alt = 'Bandeira dos Estados Unidos';
    usdFlag.classList.add('flag-icon');

    // Assuming exchangeRateElement is already defined

// Add a CSS class to the exchangeRateElement to apply styles
exchangeRateElement.classList.add("dollar_hoje");

// Set the content using innerHTML
exchangeRateElement.innerHTML = `      
      <span class="dollar-text">
        1 USD
        <img src="img/dollar/us.png" alt="USD Flag">
      </span>
      <br><strong style="font-size: 30px">=</strong><br>
      <span class="dollar-text">
        ${exchangeRateBRLtoUSD} BRL
        <img src="img/dollar/br.png" alt="BRL Flag">
      </span>
`;
  } catch (error) {
    exchangeRateElement.textContent = 'Não foi possível obter a taxa de câmbio.';
    console.error(error);
  }
}

// Chama a função inicialmente e a cada 10 minutos (600000 milissegundos)
fetchExchangeRate();
setInterval(fetchExchangeRate, 600000);