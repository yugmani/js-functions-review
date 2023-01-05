// Import stylesheets
import './style.css';

// Review of Functions in JavaScript

//Named Functions
// *******************************

// //invoke a function before declaration
add(3, 5);

function add(num1, num2) {
  let z = num1 + num2;
  console.log('Sum: ', z);
}

//invoke a function after declaration
add(100, 200);

//Anonymous function
// *******************************

//invoke anonymous function before declaration
// console.log('Area of a rectangle: ', result(10, 5));   //Error: Cannot access 'result' before initialization

const result = function (length, width) {
  return length * width;
};

//invoke anonymous function after declaration
console.log('Area of a rectangle: ', result(10, 5));

//Arrow Function with one argument and single statement;
const areaOfSquare = (num) => num * num;

//invoke arrow function
console.log('Area of Square: ', areaOfSquare(5));

//Arrow function with multiple arguments
const profile = (name, age) => 'I am ' + name + ' and ' + age + ' years old';

console.log(profile('Prayash', 13));

//Arrow function with multiple statements;
const areaOfCircle = (r) => {
  const PI = 3.14;
  return PI * r * r;
};

console.log('Area of Cirlce: ', areaOfCircle(3));
