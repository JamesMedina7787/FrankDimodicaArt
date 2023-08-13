const cardRow = document.querySelector('.card-row');

// Sample card data
const cards = [
    { id: 1, imageUrl: '/imgs/drums.gif' },
    { id: 2, imageUrl: '/imgs/005.gif' },
    { id: 3, imageUrl: '/imgs/drums.gif' },
];

// Function to create card elements
function createCard(cardData) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const img = document.createElement('img');
    img.src = cardData.imageUrl;

    cardFront.appendChild(img);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    card.appendChild(cardInner);

    cardRow.appendChild(card); // Append the card to the card row
}

// Load cards on page load
window.onload = () => {
    cards.forEach(cardData => createCard(cardData));
};
