function factorial(x) {
    var result = 1 ;
    for(var i=2; i<=x; i++) {
        result *= i;
    }
    return result;
}
function factorialAnotherSolution(num) {

    if(num === 0) {
        return 1;
    }
    var result = num;
    for(var i = num-1; i>=1; i--){
        result *= i;
    }
    return result;
}

var x = 0;
var finalResult1 = factorial(x); 
var finalResult2 = factorialAnotherSolution(x); 
console.log(finalResult2);