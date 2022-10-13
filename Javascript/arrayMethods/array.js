var arr = [1, 2, 3, "A", "B", true];

// console.log(arr);

////// Length /////////

// console.log("Length = ", arr.length);


/////  toString ////////////

// var strig = arr.toString();
// console.log(strig);

////// Join ///////////

// var join = arr.join("-");
// var join1 = arr.join("#");
// var join2 = arr.join("");

// console.log(join);
// console.log(join1);
// console.log(join2);

/////// Push ///////////////

// var push1 = arr.push(4,5,6,7)
// console.log(push1);
// console.log(arr);

////// Pop ////////////////
// console.log("Before = ", arr);
// var pop = arr.pop();
// console.log(pop);
// console.log("After = ", arr);

/////// unshift ///////////
// console.log("Before = ", arr);
// var unshift = arr.unshift(10,11,12,13,14);
// console.log(unshift);
// console.log("After = ", arr);

// shift

// console.log("Before = ", arr);
// var shift = arr.shift();
// console.log(shift);
// console.log("After = ", arr);
// arr[3] = 4;
// arr[arr.length] = false
// console.log(arr);

///////// Declaring Array //////////////
var constructorArr = new Array(10);
// console.log(constructorArr);
// [undefined, undefined, undefined, undefined, undefined];
// console.log(constructorArr[4]);
// console.log(constructorArr.length);
// console.log(arr[100]);
// constructorArr[15] = 150;
// console.log(constructorArr);

// var constructorArr1 = new Array(10,11)
// console.log(constructorArr1);


////////////////// delete /////////////////////
// var arr = [1, 2, 3, "A", "B", true];
// delete arr[2];

// console.log(arr);
// console.log(arr.length);

////////// concat //////////////////

// var a = [1,2,3,4,5];
// var b = [6,7,8,9,10];
// var c = [11,12,13,14,15];

// var d = a.concat(b,c);
// console.log(d);

/////////  splice ////////////////
// splice(startPosotion, no of elements to be deleted, ele1, ele2, ...)
var arr = [1, 2, 3, "A", "B", true];


// arr.splice(3,2,"X","Y","Z");
// arr.splice(3,0,"Q","W");

// arr.splice(3);
// console.log(arr);

///////// toString //////////// 

// console.log(arr.toString());

////////////// Sort /////////////////////////////

var charArr = ["X", "A", "Z", "C", "B", "M"];
var numArr = [5,3,9,2,55,1,23,36,48,62];

// console.log(charArr.sort());
// console.log(numArr.sort());
// console.log(numArr.sort(compareFunc));

// console.log(
//   numArr.sort(function compareFunc(a, b) {
//     return b - a;
//   })
// );

function compareFunc(a,b) {
    return a - b;
}

///////////////// Reverse ///////////////

// console.log(charArr.reverse());
// console.log(numArr.reverse());


////// Highest or Lowest Value /////////

// var sortArr = numArr.sort(compareFunc);
// var highest = sortArr[sortArr.length - 1];
// lowest = sortArr[0];
// console.log(sortArr);
// console.log("Highest = ", highest);
// console.log("Lowest = ", lowest);