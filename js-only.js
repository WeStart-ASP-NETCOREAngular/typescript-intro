const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.querySelector("button");

function add(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else return "string numbers";
}

button.addEventListener("click", () => {
  console.table(add(parseInt(input1.value), input2.value));
});


