document.write("<h1>I made an object with data of my siblings.</h1><pr>you can see our names below.</pr><br><hr>")
let mydata = [
    {
        names: "Zainab raza", age: "22", classs: "bscs"
    },
    {
        names: "Abeeha raza", age: "13", classs: "6th"
    },
    {
        names: "Khalil", age: "24", classs: "bscs"
    },
    {
        names: "Ayesha", age: "19", classs: "1st year"
    }
]
// Object(mydata).forEach(function(mine) {

//     document.write(JSON.stringify(mine, mydata[mine]));

mydata.forEach(item => {
    document.write("My name is " + "<b>" + item.names + "</b>" + ".<br> I'm " + item.age + "years old.<br> " + " i'm studying in " + item.classs + ".<br><hr>");
})

document.write("<h2>Elders one:</h2>")
mydata.forEach(item => {
    if (item.age >= 20) {
        document.write(item.names + " is elder siblings.<br>")
    }
})

document.write("<h2>Youngers one:</h2>")
mydata.forEach(item => {
        if (item.age <= 20) {
            document.write(item.names + " is younger siblings.<br>")
        }
    }
)

// document.write
// document.write(mydata("I'm"+mydata(names)+"my Age is"+mydata(age)+".i'm studying in"+mydata(classs)+".love you lots"));
// document.write(JSON.stringify(mydata));