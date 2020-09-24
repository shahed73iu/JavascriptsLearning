var age = Number(prompt("How old are you ?"));
while(isNaN(age)) {
    var age = Number(prompt("How old are you ?"));
}

var isSquare = function(age) {

    return Number.isInteger(Math.sqrt(age));
  };
  
  



if(age<0) {
    console.log("Are you kidding me that's a nice Joke!! Error!! khelbona");
}
else if(age === 21) {
    console.log("Happy 21st Birthday !!");
}
//else if(age % 2 !== 0) {
//    console.log("Your age is odd!!");
//}
//else if(!!isSquare) {
//    console.log("Perfect Square!!");
//}

//else if(age % Math.sqrt(age) == 0) {
//   console.log("Perfect Square");
//}
else if(!(Math.sqrt(age) + '').includes('.'))
{
    window.alert("Your age is a perfect square")
}

else if((Math.sqrt(age) + '').include('.') === false) {
console.log("Your age is a perfect square!!");
}

else {
    console.log("Wow you are " + age + " years old!");
  }






