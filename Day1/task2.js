function sumOfTwo(num1=0, num2=0) 
{
return num1+num2
};



// Get the button element by its ID
var but = document.getElementById("button");

// Add a click event listener to the button
but.addEventListener("click", function(){
num1 = parseInt(prompt("enter number 1"))
num2 = parseInt(prompt("enter number 2"))
res = sumOfTwo(num1, num2)
alert("sum of the two numbers you entered are: " + res)
});