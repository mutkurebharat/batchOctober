// 1. Local Variable
// 2. Global Vairiable

// var gloablVar = "Gloabl Variable" // global variable
// function something(){
    // var localVar = "Hello"; // local variable

    // gloablVar = gloablVar + " Local Content";

    //console.log("Accessing gloabl inside function = ", gloablVar);
    // console.log("Accessing local inside function = ", gloablVar);

// }

// console.log(something());
// console.log(gloablVar)
//console.log("Accessing gloabl outside function = ", gloablVar);
//console.log("Accessing local outside function = ", localVar);

function getLocalGlobal(){
    a = "Some Contents";
    //console.log("Inside FUnction = ", a);
}
getLocalGlobal();
//console.log("Outside FUnction = ", a)


var same = "Global Content";

function getLocalGlobalSameName(){
    console.log("Inside FUnction = ", same);
    var same = "Local Content";

}
getLocalGlobalSameName();
console.log("Outside FUnction = ", same)

//------------------------

var num = 10;

if(num){
    //var num1 = 11;
    const num1 = 12;
}
console.log("num1 = ", num1);



