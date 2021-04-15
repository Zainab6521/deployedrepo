// function addmums(num1,num2) {
//     return num1 + num2;
// }
// const addnums1 = addmums(3,4);
// document.write(addnums1);

// function Addnums() {
//     let addnums = prompt("Enter first number to add","e.g : 3");
//     document.getElementById("result1").innerText = "Hello! you enter "+ addnums;

//     let addnums1 = prompt("Enter Second number to add","e.g : 3");
//     document.getElementById("result2").innerText = "You just enter another number "+ addnums1;

//     return (Number(addnums) + Number(addnums1));
// }
// // const addednums = Addnums(addnums,addnums1);
// // document.write(Addnums(addmums,addnums1));

// document.getElementById("result").innerText = "the result is " +Addnums() ;


//arrow function

// let numb1 = prompt("Enter first number", "3");
// document.getElementById("result1").innerText = "First Number " + numb1;

// let numb2 = prompt("Enter second number", "3");
// document.getElementById("result2").innerText = "Second Number " + numb2;

// let Addnums = (numb1, numb2) => {
//    Number(numb1) + Number(numb2)
// };
// const output1 = Addnums(numb1, numb2);
// document.getElementById("result").innerText = "the result is " + output1 ;
// let number1 = document.getElementById("Input1").value;

// let number2 = document.getElementById("Input2").value;

const Addnumbers = (operator) => {
    let num1 = document.getElementById("Input1").value;
    let num2 = document.getElementById("Input2").value;
    // const output1 = Number(num1) + Number(num2);
    // Number(number1) + Number(number2);
    let result;
    if (operator === '+') {
         result = Number(num1) + Number(num2);
    } else if (operator === '-') {
         result = Number(num1) - Number(num2);
    } else if (operator === '*') {
         result = Number(num1) * Number(num2);
    } else if (operator === '%') {
         result = Number(num1) % Number(num2);
    }
    document.getElementById("result").innerHTML = 'Result is ' + result;
}
// const output1 = Addnumbers();
// document.getElementById("result").innerText = Addnumbers();