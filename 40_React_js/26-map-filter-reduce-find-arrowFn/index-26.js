var numbers = [3, 56, 2, 48, 5];

// Map with anonymous function
var doubleNum = numbers.map((num) => { return num * 2 });
console.log(doubleNum);

// Same with foreach
var tripleNum = [];
numbers.forEach((num) => {
  tripleNum.push(num * 3);
});
console.log(tripleNum);


// Filter (list of the numbers greater than 10)
var greaterNum = numbers.filter((num) => {
  return num > 10;
});
console.log(greaterNum);

// Same with foreach
var lessNum = [];
numbers.forEach((num) => {
  if (num < 10) {
    lessNum.push(num);
  }
});
console.log(lessNum);


// Reduce (sum all numbers) == 114
var sumNum = numbers.reduce((prevNum, currentNum) => {
  return (prevNum += currentNum);
});
console.log(sumNum);

// Same with foreach
var addNum = 0;
numbers.forEach((num) => {
  addNum += num;
});
console.log(addNum);


// Find (the first item that is greater than 10) == 56
const findNum = numbers.find((num) => {
  return num > 10;
});
console.log(findNum);


// FindIndex (the index of the first item that is greater than 10) == 1
const findIndex = numbers.findIndex((index) => {
  return index > 10;
});
console.log(findIndex);


// Practice: Dict texts with the max chars of 100
import emojipedia from "./emojipedia.js";
var hundredChars = emojipedia.map((chars) => {
  //   chars.meaning.slice(0, 100)

  // Or we can use substring instead of slice
  return chars.meaning.substring(0, 100)
});
console.log(hundredChars);


// Arrow functions
// All the functions above are written with the arrow "=>" syntax which is equal to this:
numbers.map(function (num) { return num * 4 });

// Or this:
function multiplyNum (num){
  num * 5
}
numbers.map(multiplyNum)

// Also it's not required to use "parenthesis" and/or "brackets" and the "return" keyword if we only have one parameter:
numbers.map( num =>  num * 6 );
