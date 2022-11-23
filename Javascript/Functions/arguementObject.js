function argumentFunctoin(){
    console.log(arguments);
    var result = 0;
    for(var i = 0 ; i < arguments.length ; i++){
        result = result + arguments[i];
    }
    return result;
}

console.log(argumentFunctoin(10,20,30,40,50,60));
console.log(arguments);