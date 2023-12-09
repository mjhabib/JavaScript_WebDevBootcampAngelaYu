// function iGotClicked(){
//     alert('I got clicked !')
// }
// document.querySelector('button').addEventListener('click', iGotClicked);

// or all in one line with an anonymous function
// document.querySelector('button').addEventListener('click', function(){
//     alert('I got clicked !')
// });

// var allBtns = document.querySelectorAll('.drum')

// for (let index = 0; index < allBtns.length; index++) {
//     allBtns[index].addEventListener('click', function(){
//     alert('I got clicked!')
// })
// }

// if I inspect the html, I can see I can access the h1 element by '$0'
// $0.addEventListener('click', function () {
//     alert('h1 == $0 was clicked')
// })


function makeSound(key){

    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;

        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;

        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;

        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;

        case 'j':
            var snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;

        case 'k':
            var crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;

        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
            break;

        default:
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey)

    activeButton.classList.add('pressed')
    
    setTimeout(function(){
        activeButton.classList.remove('pressed')
    }, 100)
}


// click event
var btns = document.querySelectorAll('.drum')

for (let index = 0; index < btns.length; index++) {
    
    btns[index].addEventListener('click', function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml)
        buttonAnimation(buttonInnerHtml)
    })
}

// pressing keyboard
// higher order function + callback function
document.addEventListener('keydown', function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
}) 
