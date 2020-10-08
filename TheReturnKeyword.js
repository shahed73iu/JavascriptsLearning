function capitalize(str) {
    if(typeof(str)=="number") {
        return "that's not a string !";        
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
} 
var city = "dhaka";
//var capital = capitalize(city);

var num = 5655;
var capital = capitalize(num);

console.log(capital);