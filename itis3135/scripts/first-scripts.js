var name = prompt("Please enter your name");
var mood = prompt("How are you doing today?");
//code to get the date
var date = new Date();

document.write("Today is " + date.toDateString() + ", and the time is: " + date.toTimeString() + "<br> The Dynamic Panther Enterprises welcomes you, " + name + "! We're glad you are doing " + mood + "!");


//create a function to calculate the tax of a user inputted subtotal
function calculateTax() {
    var subtotal = parseFloat(prompt("Enter the subtotal"));
    var taxPercent = .05;
    var taxAmount = subtotal * taxPercent;
    var total = (subtotal + taxAmount);
    alert("The total is: $" + total);
}

function calculateSum(){
    var num1 = parseFloat(prompt("Please enter the first number"));
    var num2 = parseFloat(prompt("Please enter the second number"));
    var sum = (num1 + num2);
    alert("The sum is: " + sum);
}

function calculateDifference() {
    var num1 = parseFloat(prompt("Please enter the first number"));
    var num2 = parseFloat(prompt("Please enter the second number"));
    var difference = (num1 - num2);
    alert("The difference is: " + difference);
}

function calculateQuotient() {
    var num1 = parseFloat(prompt("Please enter the first number"));
    var num2 = parseFloat(prompt("Please enter the second number"));
    var quotient = (num1 / num2);
    alert("The quotient is: " + quotient);
}

function calculateProduct() {
    var num1 = parseFloat(prompt("Please enter the first number"));
    var num2 = parseFloat(prompt("Please enter the second number"));
    var product = (num1 * num2);
    alert("The product is: " + product);
}
