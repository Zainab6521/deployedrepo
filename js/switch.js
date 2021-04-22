// let year;
// switch (new Year.getyear()) {
//     case Year>2000:
//         year = "this is first decade of 21st century....";
//         break;
//     case Year>2010:
//         year = "this is second decade of first cntury..";
//         break;
//     default:
//         year = " you're in 20th century";
//         break;
// }
// document.getElementById("switch").innerHTML = year;

// program for a simple calculator
let result;
Number(result);
// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
} 

document.getElementById("result1").innerHTML = result;

///checking the number

// const a = parseFloat(prompt("enter a number"));
// const b = parseFloat(prompt("enter another number"));
// let result;
// String(result);
//  switch (result) {
//      case a > b:
//          result = "a is greater";
//          break;
//     case b > a:
//         result = "b is greater";
//         break;
//     case a===b:
//         result = "both are equal";
//         break;
//      default:        
//         document.write('Invalid operator');
//          break;
//  }
// document.getElementById("result1").innerHTML = result;
