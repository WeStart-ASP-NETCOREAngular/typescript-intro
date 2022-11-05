type Combinable = number | string;

function combine(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "number") {
    return +n1 + +n2;
  } else {
    return n1.toString() + n2.toString();
  }
}

let number1 = 5;
let number2 = 10;

console.log(combine(number1, number2));
console.log(combine("Wasim", "Fatair"));


