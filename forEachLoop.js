// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);
// 
// function myFunction(item, index) {
//   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
// }

var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
  console.log(arr[index])
}