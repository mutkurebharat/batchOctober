var myArray1 = new Array(3);

// var output = [[1,2,3],[4,5,6],[7,8,9]]
// [
//   [undefined, undefined, undefined],
//   [undefined, undefined, undefined],
//   [undefined, undefined, undefined],
// ];

for(var i = 0 ; i < 3 ; i++){
    myArray1[i] = new Array(3);
}

// myArray[0][0] = 1;
// myArray[0][1] = 2;
// myArray[0][2] = 3;

// myArray[1][0] = 4;
// myArray[1][1] = 5;
// myArray[1][2] = 6;

// myArray[2][0] = 7;
// myArray[2][1] = 8;
// myArray[2][2] = 9;

var start = 1;

for(var i = 0 ; i < 3 ; i++){
    for(var j = 0 ; j < 3 ; j++){
        myArray1[i][j] = start;
        start = start + 1; 
    }
}

console.log(myArray1);

// myArray1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// myArray2 = [
//   [9, 8, 7],
//   [6, 5, 4],
//   [3, 2, 1],
// ];

// myArray3 = [
//   [10, 10, 10],
//   [10, 10, 10],
//   [10, 10, 10],
// ];

