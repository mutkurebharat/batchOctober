function closureExample(c,d){
    let a = 10;
    return function(){
        let b = 20;
        return a + b + c + d;
    }
};

let result = closureExample(10,20);
console.log(result());

// console.log(closureExample(10,20)())