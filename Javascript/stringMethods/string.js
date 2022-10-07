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

// console.log(substr1);
// console.log(substr2);
// console.log(substr3);
// console.log(substr4);
// console.log(substr5);
// console.log("substr6 = ", substr6);

// console.log(slice10);

////////// replace ///////////////

var str = "Working on string methods string";

// var replace1 = str.replace("string", "number");
// var replace2 = str.replace(/StrInG/i, "Number");
// var replace3 = str.replace(/StrInG/ig, "Numberrrrrr");


// console.log(replace1);
// console.log(replace2);
// console.log(replace3);

/////// toUpperCase /////////////////

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//////////// Concat /////////////////

// var a = "ABC"
// var b = "DEF"
// var c = "GHI"

// console.log(a + b + c);

// var d = a.concat(" ",b, " ",c);
// console.log(d);
// console.log(a);


//////////////// trim /////////////////

// var trimmm = "      Good         "
// // console.log("before = ", trimmm.length);
// // var trim1 = trimmm.trim()
// // console.log("after = ", trim1.length);
// console.log("TrimStart = ", trimmm.trimStart().length);
// console.log("TrimStart = ", trimmm.trimEnd().length);

///////////// toString() ///////////////

// var num = 10;

// console.log(typeof num);

// var toStr = num.toString();
// console.log(typeof toStr);

///////////// indexOf ///////////////////
// if doesn't match it will return -1 

var str = "string Working on string methods string";

// console.log(str.length);

// var index1 = str.indexOf("string");
// var index2 = str.lastIndexOf("string")
// var index3 = str.indexOf("string", 7)
// console.log("First = ", index1);
// console.log("Last = ", index2);
// console.log("Middle = ", index3);

////////////// charAt ///////////////////////

// var char1 = str.charAt(10000);
// console.log(char1);

// var charcode = str.charCodeAt(10);
// console.log(charcode);

////////////// split //////////////////////
// convert string to array
var str = "string Working on string methods string";

var split1 = str.split();
var split2 = str.split(' ')
var split3 = str.split('')
// console.log(split1);
console.log(typeof split2);
// console.log(split3);