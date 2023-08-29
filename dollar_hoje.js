const exchangeRateElement = document.getElementById('dollar_hoje');
const currencies = [
  { code: 'USD', name: 'Dolar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'Libras' },
  { code: 'BTC', name: 'Bitcoin' },
  { code: 'ETH', name: 'Ethereum' }
];
let currentCurrencyIndex = 0;

async function fetchExchangeRate(currency) {
  try {
    const currencyInfo = currencies.find(c => c.code === currency);
    let response, data, exchangeRateToBRL;

    if (currency === 'BTC' || currency === 'ETH') {
      const targetCurrency = currency === 'BTC' ? 'bitcoin' : 'ethereum';
      response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${targetCurrency}&vs_currencies=brl`);
      data = await response.json();
      exchangeRateToBRL = data[targetCurrency].brl.toFixed(2);
    } else {
      response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
      data = await response.json();
      exchangeRateToBRL = data.rates.BRL.toFixed(2);
    }

    const currencyFlag = document.createElement('img');
    currencyFlag.src = `img/dollar/${currency}.png`;
    currencyFlag.alt = `${currencyInfo.name}`;
    currencyFlag.classList.add('flag-icon');

    exchangeRateElement.innerHTML = `
      <span class="dollar-text">
        1 ${currencyInfo.name}
        <img src="img/dollar/${currency.toLowerCase()}.png" alt="${currencyInfo.name}">
      </span>
      <br><strong style="font-size: 30px">=</strong><br>
      <span class="dollar-text">
        ${exchangeRateToBRL} Reais
        <img src="img/dollar/br.png" alt="Bandeira do Brasil">
      </span>
    `;
  } catch (error) {
    exchangeRateElement.textContent = 'Não foi possível obter a taxa de câmbio.';
    console.error(error);
  }
}

function cycleCurrencies() {
  currentCurrencyIndex = (currentCurrencyIndex + 1) % currencies.length;
  const nextCurrency = currencies[currentCurrencyIndex].code;
  fetchExchangeRate(nextCurrency);
}

fetchExchangeRate(currencies[currentCurrencyIndex].code);
setInterval(cycleCurrencies, 10000); // Alternar moeda a cada 10 segundos
