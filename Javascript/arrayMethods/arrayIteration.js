// forEach

var numArray = [2,4,3, 1, 8, 11, 10, 18, 20, 30, 156];
// var resultArr = []
// var forEachResult = numArray.forEach(arrFunc);

// function arrFunc(val, index, arr){
// resultArr.push(val * 2);
// }
// // console.log("result = ", resultArr);
// console.log("forEachResult = ", forEachResult);


// // Map

// var mapResult = numArray.map(mapFunc)

// function mapFunc(val,index,arr){
//     return val * 2;
// }
// console.log("mapResult = ", mapResult);

//Filter

// var filterResult = numArray.filter(filterFunc)

// function filterFunc(val) {
//     if(val % 2 === 0){
//         return val;
//     }
// }

// console.log("fiterResult = ", filterResult);

// Reduce

// var reduceResult = numArray.reduce(reduceFunc, 100);

// function reduceFunc(total,val, index, arr) {
//     return total + val;
// }

// console.log(reduceResult);

// Every

// var everyResult = numArray.every(everyFunc)

// function everyFunc(val) {
//     return val > 15;
// }

// console.log("everyResult = ", everyResult);

// Some

// var someResult = numArray.some(someFunc);

// function someFunc(val) {
//   return val > 155;
// }

// console.log("someResult = ", someResult);

var numArray = [2, 4, 3, 1, 8, 11, 10,11, 18, 20, 30, 156,11];

// indexOf

// var indexOfResult = numArray.indexOf(11)
// var lastIndexOfResult = numArray.lastIndexOf(11);
// var middleIndexOfRes = numArray.indexOf(11, 6)
// console.log(indexOfResult);
// console.log("lastIndexOfResult = ", lastIndexOfResult);
// console.log("middleIndexOfRes = ", middleIndexOfRes);

// find

// var findRes = numArray.find(findFunc);

// function findFunc(val) {
//     return val > 20;
// }

// console.log("findRes = ", findRes);

// console.log(numArray.entries());

//////////// for loop //////////////////
var res = [];
for(var i = 0 ; i < numArray.length ; i++){
    res.push(numArray[i] * 2);
}
console.log(res);
