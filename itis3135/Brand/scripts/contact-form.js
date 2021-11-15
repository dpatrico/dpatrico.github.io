//The function that validates the form and returns the user inputted values back to them
function submittedForm() {
    if (document.getElementById("fname").value != "" && document.getElementById("fname").value != ""
        && document.getElementById("method_entry").value != "" && document.getElementById("agree").checked == true) {
        //This is the alert that reads back the users inputted information
        alert("Hello " + document.getElementById("fname").value + " " + document.getElementById("lname").value +
            "!\nYour preferred method of contact is " + document.getElementById("method_entry").value +
            "\nYou have also agreed to be contacted! \nExpect to hear from us shortly and thank you for your time!")
    } else {
        //Alerts the user they have not enterd all the required info
        alert("Please enter all the information required");
    }
}