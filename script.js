document.addEventListener('DOMContentLoaded', () => {
    
//card options
const cardArray = [
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'cake',
        img: 'images/cake.jpg'
    },
    {
        name: 'cake',
        img: 'images/cake.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
    },
    {
        name: 'noodles',
        img: 'images/noodles.jpg'
    },
    {
        name: 'noodles',
        img: 'images/noodles.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'sushi',
        img: 'images/sushi.jpg'
    },
    {
        name: 'sushi',
        img: 'images/sushi.jpg'
    }
]
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenId = []
let cardWon = []

//create your game board
function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//flip your card function
function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length ===2){
        setTimeout(checkForMatch, 500)
    }
}

//check for match
function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]

if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src', 'images/blank.jpg')
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
    alert('you have clicked the same image!')
}
else if(cardChosen[0] === cardChosen[1]){
    alert ('you have found a match')
    cards[optionOneId].setAttribute('src', 'images/whiteBackground.jpg')
    cards[optionTwoId].setAttribute('src', 'images/whiteBackground.jpg')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardWon.push(cardChosen)
}
else{
    cards[optionOneId].setAttribute('src', 'images/blank.jpg')
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
    alert('Sorry, try again')
}
cardChosen = []
cardChosenId = []
resultDisplay.textContent = cardWon.length
if(cardWon.length === cardArray.length/2){
    resultDisplay.textContent = 'Congratulations!You found them all!'
}
}

createBoard();
})