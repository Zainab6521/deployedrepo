// let a = document.getElementById("Input1").value;
// let b = document.getElementById("Input2").value;
// function checkNums(a,b) {
//     if (a.value > b.value) {
//         return a.value + "is greter than " +b.value;
//     }
//     else if (a.value < b.value) {
//         return a.value + "is less than " +b.value;
//     }
//     else {
//         return "both are equal"
//     }
// };
// Number(a)>Number(b)

const checkNums = () => {
    let a = document.getElementById("Input1").value;
    let b = document.getElementById("Input2").value;
    Number(a);
    Number(b);
    console.log(typeof(a & b));
    let result;
    if (a>b) {
        result = a;
    }
    else if (a<b) {
        result = b;
    }
    document.getElementById("result").innerHTML = result + "is greater.";
};

