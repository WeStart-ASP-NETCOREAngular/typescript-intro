var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.querySelector("button");
function add(n1, n2, showResult) {
    var result = n1 + n2;
    if (showResult) {
        console.log(result);
    }
    return n1 + n2;
}
button.addEventListener("click", function () {
    var showResult;
    showResult = true;
    add(+input1.value, +input2.value, showResult);
});
