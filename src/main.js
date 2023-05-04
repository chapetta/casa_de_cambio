
const input = document.querySelector('#input-text');
const cardsRate = document.querySelector('#cards-rate');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', ()=> {
    if(!input.value) {
        alert('Você precisa passar uma moeda');
    }
    fetch(`https://api.exchangerate.host/latest?base=${input.value}`)
        .then((res) => res.json())
        .then((data) => {
            const arraysOfRates = Object.entries(data.rates);
            const titleValues = document.createElement('h2');
            titleValues.innerHTML = `Valores referentes a 1 ${data.base}`;
            cardsRate.appendChild(titleValues);

            arraysOfRates.map((item) => {
                const IndividualCard = document.createElement('p');
                IndividualCard
                    .innerHTML = `${item[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${item[1]}`;
      
                cardsRate.appendChild(IndividualCard);
            });

        }).catch((err) => {
            console.log(err);
            alert('moeda inexistente');
        });
});

