var randDice1 = Math.floor(Math.random() * 6) + 1;
var randImg1 = 'images/dice' + randDice1 + '.png'

var randDice2 = Math.floor(Math.random() * 6) + 1;
var randImg2 = 'images/dice' + randDice2 + '.png'

document.querySelector('.img1').setAttribute('src', randImg1)
document.querySelector('.img2').setAttribute('src', randImg2)

if (randDice1 > randDice2) {
    document.querySelector('h1').textContent = 'Player 1 wins!'
}
else if (randDice1 < randDice2) {
    document.querySelector('h1').textContent = 'Player 2 wins!'    
}
else {
    document.querySelector('h1').textContent = 'It is a draw!'
}