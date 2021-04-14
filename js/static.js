let x = 0;
const array = Array();
// var newarray = array.map(add_element_to_array());
function add_element_to_array() {
    array[x] = document.getElementById("myInput").value;
    alert(`Element: ${array[x]} Added at index ${x}`);
    x++;
    document.getElementById("myInput").value = "";
}

function display_array() {
    let e = "<hr/>";
    for (let y = 0; y < array.length; y++) {
        e += `At Index ${y} = ${array[y]}<br/>`;
    }

    document.getElementById("Result").innerHTML = e;
}

//* var newarray = array.map(myFunction)
// function myFunction(i) {
//     return i * 10;
//   }* */
// function clear() {
//     this.getElementById("myInput").value="";
// }

// document.write("<h1>heading</h1>")
// alert("Ruko zara sabar karo.");
// console.log("hello!");

// let array = [];
// for (let i = 0; i <= 15; i++) {
//     array.push(i)
// }
// document.write(array);
// let items = [];