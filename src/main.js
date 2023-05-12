const input = document.querySelector('#input-search');
const button = document.querySelector('#search-button');
const ul = document.querySelector('#valores');
const h2 = document.querySelector('#base');

const fetchApi = async (moeda) => {
    const result = await fetch(`https://api.exchangerate.host/latest?base=${moeda}`);
    const data = await result.json();
    tabelaDeValores(data);
    h2.innerText = `Valores referentes a 1 ${data.base}`;
};

const tabelaDeValores = ({rates}) => {
    const valoresDasMoedas = Object.entries(rates);
    clearList(ul);
    valoresDasMoedas.forEach(([rate, currency]) => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${rate}:</b> ${currency.toFixed(3)}`;
        ul.appendChild(li);
    });
};

const clearList = (list) => {
    list.innerHTML = '';
};

button.addEventListener('click', (event) => {
    event.preventDefault();
    const moeda = input.value;
    fetchApi(moeda);
});