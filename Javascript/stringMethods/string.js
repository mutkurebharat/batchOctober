var str = "Working on string methods";

// Extraction Methods
// slice
var slice = str.slice(0,7);
var slice1 = str.slice(8, 10);
var slice2 = str.slice(8, 10);
var slice4 = str.slice(11, 8);
var slice3 = str.slice(11);

// negative params

var slice5 = str.slice(-20, 2)
var slice6 = str.slice(2, -20);



// console.log(slice);
// console.log("slice1 = ", slice1);
// console.log("slice3 = ", slice3);
// console.log("slice4 = ", slice4);

// console.log("slice5 = ", slice5);
// console.log("slice6 = ", slice6);

//// Substring /////////////
var str = "Working on string methods";
// var substring1 = str.substring(-5, -1);
// console.log(substring1);

//// Substr /////////////

var substr1 = str.substr(0,5);
var substr2 = str.substr(5, 5);

var substr3 = str.substr(-10, 3);
var substr4 = str.substr(-10);

var substr5 = str.substr(10);
var substr6 = str.substr(10, -2);


var slice10 = str.slice(0, 5);

console.log(substr1);
console.log(substr2);
console.log(substr3);
console.log(substr4);
console.log(substr5);
console.log("substr6 = ", substr6);

console.log(slice10);
