
console.log('Ya tenemos javascript!');


function sayHi () {
    console.log( 'HI !');
}
setTimeout(sayHi, 2000); // Seteamos un tiempo de espera


const buttom = document.getElementById('buy-now'); // Devuelve una referencia al elemento por su ID

buttom.addEventListener('click', () => { // Registra un evento a un objeto en especifico.
    if (buttom.innerHTML === 'Comprar ahora') {
        buttom.innerHTML = 'Gracias por tu compra'; // Modificamos el texto
    } else {
        buttom.innerHTML = 'Comprar Ahora'; 
    }
})

console.log(buttom);


const cards = document.querySelector('.cataloge-card'); // Devuelve el primer elemento del docuemento que coincida con el grupo especificado de selectores.

console.log(cards);


const cardsALL = document.querySelectorAll('.cataloge-card'); // Devuelve una lista estatica que representa una lista de elementos del documetno 

console.log(cardsALL);

console.log('/////');

for (let i = 0; i < cardsALL.length; i++) {
    const card = cardsALL[i];

    const indexElement = document.createElement('p'); // Crea un elemento HTML especificado por su tagName
    indexElement.innerHTML = i + 1;
    card.appendChild(indexElement) // Agrega un nuevo nodo al final de la lista de un elemento hido de un elemento padre especificado

    card.addEventListener('click', () => {
        card.remove(); // Eliminamos el elemento
    })    
}