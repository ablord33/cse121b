/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Define a function using function declaration to add two numbers.
function add(number1, number2) {
    return number1 + number2;
  }
  
  // Define a function using function declaration to get values from HTML form controls and call the 'add' function.
  function addNumbers() {
    // Get the values of two HTML form controls with IDs 'add1' and 'add2', and convert them to numbers.
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
  
    // Call the 'add' function and assign the result to an HTML form element with an ID of 'sum'.
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  // Add a click event listener to the HTML button with ID 'addNumbers' to trigger the 'addNumbers' function.
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
// Define a function using function expression to subtract two numbers.
const subtract = function (number1, number2) {
    return number1 - number2;
  };
  
  // Define a function using function declaration to get values from HTML form controls and call the 'subtract' function.
  function subtractNumbers() {
    // Get the values of two HTML form controls with IDs 'subtract1' and 'subtract2', and convert them to numbers.
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  
    // Call the 'subtract' function and assign the result to an HTML form element with an ID of 'difference'.
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  }
  
  // Add a click event listener to the HTML button with ID 'subtractNumbers' to trigger the 'subtractNumbers' function.
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
// Define an arrow function to multiply two numbers.
const multiply = (number1, number2) => number1 * number2;

// Define a function using function declaration to get values from HTML form controls and call the 'multiply' function.
function multiplyNumbers() {
  // Get the values of two HTML form controls with IDs 'factor1' and 'factor2', and convert them to numbers.
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);

  // Call the 'multiply' function and assign the result to an HTML form element with an ID of 'product'.
  document.querySelector('#product').value = multiply(factor1, factor2);
}

// Add a click event listener to the HTML button with ID 'multiplyNumbers' to trigger the 'multiplyNumbers' function.
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
// Define a function using arrow function to get values from HTML form controls and call the 'divide' function.
const divideNumbers = () => {
    // Get the values of two HTML form controls with IDs 'dividend' and 'divisor', and convert them to numbers.
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
  
    // Call the 'divide' function and assign the result to an HTML form element with an ID of 'quotient'.
    document.querySelector('#quotient').value = divide(dividend, divisor);
  };
  
  // Add a click event listener to the HTML button with ID 'divideNumbers' to trigger the 'divideNumbers' function.
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
// Get the current date
const currentDate = new Date();

// Get the current year
const currentYear = currentDate.getFullYear();

// Assign the current year to an HTML form element with an ID of "year"
document.querySelector('#year').value = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
// Use the filter() array method to find odd numbers
const oddNumbers = numbersArray.filter(number => number % 2 === 1);

// Assign the result to the HTML element with an ID of "odds"
document.querySelector('#odds').textContent = oddNumbers;

/* Output Evens Only Array */
// Use the filter() array method to find even numbers
const evenNumbers = numbersArray.filter(number => number % 2 === 0);

// Assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').textContent = evenNumbers;

/* Output Sum of Org. Array */
// Use the reduce() array method to sum the array elements
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);

// Assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
// Use the map() array method to multiply each element by 2
const multiplied = numbersArray.map(number => number * 2);

// Assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied').textContent = multiplied;

/* Output Sum of Multiplied by 2 Array */
// Use the map() and reduce() array methods to sum the elements after multiplying by two
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);

// Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
