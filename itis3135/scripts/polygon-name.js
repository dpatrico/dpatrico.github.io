//create a variable for the number the user enters and use the getNumber function
var userNumber = parseFloat(prompt("The Dynamic Panther would like you to enter a number"));
var loop = 0;

while (loop == 0) {
    if (validateEntry(userNumber)) {
        var polygonShape = getShape(userNumber);
        alert(polygonShape);
        loop = 1;
    } else {
        userNumber = parseFloat(prompt("This entry was invalid please enter another number between -12 and 12"));
    }
}

//Function to validate a number is entered and is between 1-10
function validateEntry(userNumber) {
    if (userNumber >= -12 && userNumber <= 12) {
        return (userNumber == userNumber);
    }
}

function getShape(userShape) {
    userShape = Math.round(Math.abs(userShape));
    switch (userShape) {
        case 0:
            return "A polygon with 0 sides does not exist";
            break;
        case 1:
            return "A polygon with 1 side is a Henagon";
            break;
        case 2:
            return "A polygon with 2 sides is a Digon";
            break;
        case 3:
            return "A polygon with 3 sides is a Triangle";
            break;
        case 4:
            return "A polygon with 4 sides is a Quadrilateral";
            break;
        case 5:
            return "A polygon with 5 sides is a Pentagon";
            break;
        case 6:
            return "A polygon with 6 sides is a Hexagon";
            break;
        case 7:
            return "A polygon with 7 sides is a Heptagon";
            break;
        case 8:
            return "A polygon with 8 sides is a Octagon";
            break;
        case 9:
            return "A polygon with 9 sides is a Nonagon";
            break;
        case 10:
            return "A polygon with 10 sides is a Decagon";
            break;
        case 11:
            return "A polygon with 11 sides is a Hendecagon";
            break;
        case 12:
            return "A polygon with 12 sides is a Dodecagon";
            break;

    }
}