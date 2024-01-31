var button = document.getElementById("button");

button.addEventListener("click", function() {
    var expression = prompt("Enter a math expression ");
    var res = calcExpression(expression);
    alert(" the result is: " + res);
});



function calcExpression(expression) {
    return eval(expression);
}