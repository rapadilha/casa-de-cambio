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
        li.className = 'bg-gray-500 mt-2 ml-3 mr-10 px-6 text-center rounded';
        li.innerHTML = `<b>${rate}:</b> <span class="text-yellow-300">${currency.toFixed(3)}</span>`;
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