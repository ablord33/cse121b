const apiKey = '90zV1YA7lfaWQM4kdRFoiiLn5nj8nWSK';
const apiUrl = `https://api.apilayer.com/exchangerates_data/latest/?access_key=${apiKey}`;
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');

// Fetch currency data and populate dropdowns
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const currencies = Object.keys(data.rates);
        currencies.forEach((currency) => {
            const option1 = document.createElement('option');
            const option2 = document.createElement('option');
            option1.text = currency;
            option1.value = currency;
            option2.text = currency;
            option2.value = currency;
            fromCurrencySelect.appendChild(option1);
            toCurrencySelect.appendChild(option2);
        });
    });

document.getElementById('convert').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    fetch(`${apiUrl}&base=${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
            const exchangeRate = data.rates[toCurrency];
            const convertedAmount = amount * exchangeRate;
            document.getElementById('convertedAmount').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch((error) => {
            console.error('Error fetching exchange rate data:', error);
        });
});
