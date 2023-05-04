const ul = document.querySelector('#cards-rate');

const fetchApi = () => {
    const input = document.querySelector('#input-text');
    ul.innerHTML = '';
    if(!input.value) {
        alert('Você precisa passar uma moeda');
    }
        
    const inputValue = input.value.toUpperCase();
    fetch(`https://api.exchangerate.host/latest?base=${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
            const {rates, base} = data;
            const arraysOfRates = Object.entries(rates);

            const titleValues = document.createElement('h2');
            titleValues.innerHTML = `Valores referentes a 1 ${base}`;
            ul.appendChild(titleValues);

            arraysOfRates.forEach((item) => {
                const IndividualCard = document.createElement('li');
                IndividualCard
                    .innerHTML = `${item[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${item[1]}`;
      
                ul.appendChild(IndividualCard);
            });
            
        }).catch((err) => {
            console.log(err);
            alert('moeda inexistente');
        });
};



const fetchCurrencies = () => {
    const searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', fetchApi );
};

fetchCurrencies();
