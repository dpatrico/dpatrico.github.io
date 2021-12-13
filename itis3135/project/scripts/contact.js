//The function that validates the form and returns the user inputted values back to them
function submittedForm() {
    if (document.getElementById("fname").value == "" || document.getElementById("lname").value == ""
        || document.getElementById("phone").value == "" || document.getElementById("email").value == "" ||
        document.getElementById("agree").checked != true) {
        //Alerts the user they have not enterd all the required info
        alert("Please enter all the required information");
    } else {
        alert("This contact form has been submitted!");
    }
}