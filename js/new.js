document.write("<h1>heading</h1>")
alert("Ruko zara sabar karo.");
console.log("hello!");

let array = [];
for (let i = 0; i <= 15; i++) {
    array.push(i)
}
document.write(array);

// array.forEach(myFunction)
// function myFunction(item, index, array) {
//     array[index] = item * 10;
// }
// document.write(array);

var newarray = array.map(myFunction)
function myFunction(i) {
  return i * 10;
}

// array.forEach(item => {
//     // document.write(item.array+2)
//     // array = item.array + 2
//     item + 2;
// });
// document.write(array);