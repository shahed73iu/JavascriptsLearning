function kebabCasing (str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

var str = "hello-world";
var result = kebabCasing(str);
console.log(result);
