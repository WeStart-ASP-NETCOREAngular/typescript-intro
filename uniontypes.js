function combine(n1, n2) {
    if (typeof n1 === "number") {
        return +n1 + +n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
var number1 = 5;
var number2 = 10;
console.log(combine(number1, number2));
console.log(combine("Wasim", "Fatair"));
