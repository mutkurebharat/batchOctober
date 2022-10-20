// function name(params) {
    
// }

// function anything() {
//     return "Javascript Tuts"
// }

// console.log(anything());

// 1. Function Declaration

// function getAddition(firstNum, secondNum){
//     console.log("firstNum = ", firstNum);
//     console.log("secondNum = ", secondNum);
//     return firstNum + secondNum;
// }

// console.log("getAddition Result = ", getAddition(5, 7));

// Ways to Declare Function

//1. Function Declaration
//2. Function Exrpression

//2.1 Anonymous Function Expression
//2.2 Named Function Expression
//2.3 Immediately Invoked Function Expression(IIFE)
//2.3 Self Executing Function Expression
//2.3 Self-Invoked Function Expression

// 2. Function Expression
//2.1 Anonymous Function Expression

// var getAddition = function(firstNum, secondNum){
//     console.log("firstNum = ", firstNum);
//     console.log("secondNum = ", secondNum);
//     return firstNum + secondNum;
// }

// console.log(getAddition(10));
// console.log(getAddition(10, 20));

//2.2 Named Function Expression

// var result = function getAddition(firstNum, secondNum){
//     console.log("Inner = ", getAddition); // Accessible
//     console.log("firstNum = ", firstNum);
//     console.log("secondNum = ", secondNum);
//     return firstNum + secondNum;
// }

// console.log(result(10,30));
//  console.log("Outer = ", getAddition); // Not Accessible


// FActorial

// var factorialResult = function getFactorial(num){
//     if(num <= 1){
//         return 1;
//     }
//     return num * getFactorial(num - 1);
// }

// console.log("factorialResult = ", factorialResult(5));

//2.3 Immediately Invoked Function Expression(IIFE)
//2.3 Self Executing Function Expression
//2.3 Self-Invoked Function Expression

var result = (function getFactorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * getFactorial(num - 1);
})(5);

console.log("Result = ", result);

