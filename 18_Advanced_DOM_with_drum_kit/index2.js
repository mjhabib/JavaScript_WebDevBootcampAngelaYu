// higher order functions
function add(num1, num2){
    return num1 + num2
}

function multiply(num1, num2){
    return num1 * num2
}

function calculator(num1, num2, operator){
    return operator(num1, num2)
}
// ex: calculator(2, 3, add)  ==  5


var hotelStaff = {
    name: 'MJ',
    position: 'Manager',
    age: 33,
    languages: ['English', 'German', 'Arabic', 'Persian']
}

// alert(hotelStaff.languages);

// constructing a function, (its name must start with an uppercase letter)
function HotelStaff(name, position, age, languages){
    this.name = name
    this.position = position
    this.age = age
    this.languages = languages

    // method, also known as an anonymous function!
    this.move = function (){
        alert('The person on his/her way!')
    }
}

// Initializing the object
var person1 = new HotelStaff('Joe', 'Mechanic', '36', ['English', 'Persian'])
var person2 = new HotelStaff('Joey', 'Comedian', '40', ['English'])

alert(person1.position)
alert(person2.name)
person2.move();
