
console.log('Ya tenemos javascript!');

function sayHi () {
    console.log( 'HI !');
}
setTimeout(sayHi, 2000); // Seteamos un tiempo de espera

///////////////

const buttom = document.getElementById('buy-now'); // Devuelve una referencia al elemento por su ID

buttom.addEventListener('click', () => { // Registra un evento a un objeto en especifico.
    if (buttom.innerHTML === 'Comprar ahora') {
        buttom.innerHTML = 'Gracias por tu compra'; // Modificamos el texto
    } else {
        buttom.innerHTML = 'Comprar Ahora'; 
    }
})
console.log(buttom);
///////////////

const cards = document.querySelector('.cataloge-card'); // Devuelve el primer elemento del docuemento que coincida con el grupo especificado de selectores.
console.log(cards);
///////////////

const cardsALL = document.querySelectorAll('.cataloge-card'); // Devuelve una lista estatica que representa una lista de elementos del documetno 
console.log(cardsALL);


for (let i = 0; i < cardsALL.length; i++) {
    const card = cardsALL[i];

    const indexElement = document.createElement('p'); // Crea un elemento HTML especificado por su tagName
    indexElement.innerHTML = i + 1;
    card.appendChild(indexElement) // Agrega un nuevo nodo al final de la lista de un elemento hido de un elemento padre especificado

    //  Elimniar gatos
    card.addEventListener('click', () => {
        card.remove(); // Eliminamos el elemento
    })    
}

console.log('CLASE 20 JS Modificacion del DOM');

////// CLASE 20 JS Modificacion del DOM //////

const CreateCatCard = (cardIndex) => {
    const card = document.createElement('div');
    card.classList.add('cataloge-card'); // Devuelve una lisata de clases // .add(string) = añade las calses indicadas.
    
    const img = document.createElement('img');
    img.classList.add('cataloge-card-img');
    // img.src = "https://cataas.com"; // Ya no sirve mas la API de cats
    // img.alt = 'Catsuki';
    //console.log(card.classList);
    // console.log(cardsContainer);
    // console.log(img);

    // agrego el indicador de indice en la card
    const indexElement = document.createElement('p'); // Crea un elemento HTML especificado por su tagName
    indexElement.innerHTML = cardIndex + 1;

    card.appendChild(indexElement) // Agrega un nuevo nodo al final de la lista de un elemento hido de un elemento padre especificado

    //  Agrego la funcionalidad de eliminar la card al hacer click
    card.addEventListener('click', () => {
        card.remove(); // Eliminamos el elemento
    })    

    cardsContainer.appendChild(card);
    card.appendChild(img);
}

const cardsContainer = document.getElementsByClassName('cataloge-content')[0]; // Retorna un objeto similar a un array de los elementos hijos que tenga todos los nombres de la clase indicada.
const addButtom = document.getElementById('add-cat-buttom')

// Creacion de Cards
addButtom.addEventListener('click', () => {
    const cardsCount = cardsContainer.children.length-1;
    CreateCatCard(cardsCount);
})


// empieza a cargar
// muestra un indicador de que esta cargando 
// una vez que carga muestra los elementos

const getCatCrads = () => {
    // Primero vamos a traer las cards de datos de la base de datos
    
    setTimeout(() => {        
        const loaderIndicator = document.getElementById('cataloge-loader');
        loaderIndicator.style.display = "none";
        const catCards = [1, 2, 3, 4, 5]; // HardCodear array <> Traer de una base de datos

        for (let i = 0; i < catCards.length; i++) {
            CreateCatCard(i);   
        }
    }, 3000);
    
}

// Cargar las cards de gatos y mostrarlas en pantalla
getCatCrads()


