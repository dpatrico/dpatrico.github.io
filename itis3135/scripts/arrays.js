//Declare two empty arrays one for person and the other for salaries
var persons = ["Danny", "Patrica", "Tish"];
//Make these values 0 since these will be the default values
var salaries = [0, 0, 0];

var $ = function (id) {
    return document.getElementById(id);
};

//Create an addSalary() function
function addSalary() {
    //Create varibale for the users name and salary input
    var userPersonsInput = document.getElementById("user_person").value;
    var userSalaryInput = document.getElementById("user_salary").value;

    //If the salary entered is lower than 50 and greater than 200 or empty alert the user with an error message
    if (userSalaryInput < 20 || userSalaryInput > 200 || userSalaryInput == "") {
        alert("You must enter a name and a valid salary between 20 and 200");
        //This will clear whatever was already inputted
        userSalaryInput = "";
        //Use the focus function to help direct the user to what they were missing
        $("user_person").focus();
    }
    //This else indicates what to do when the entry is valid
    else {
        userSalaryInput = parseInt(userSalaryInput);
        //Use another if statement in this else statement to check if the persons array contains the name selected by the user
        if (persons.includes(userPersonsInput)) {
            var tempIndex = persons.indexOf(userPersonsInput);
            salaries[tempIndex] = userSalaryInput;
        }
        //This else indicates what to do when the entry is valid and the name selected is included in the array
        else {
            //Push the validated user inputs into their respective arrays
            persons.push(userPersonsInput);
            salaries.push(userSalaryInput);
        }
    }

    //This is used to clear the salary input and refocus to the begining of the form which is to select a person
    $("user_salary").innerHTML = "";
    $("user_person").focus();
}

//Create a displayResults() function
function displayResults() {
    var sum = 0;
    var averageSalary = 0;
    var highestSalary = 0;
    var highestSalaryNumber;

    //Use a for loop to add up all the values in the salaries array
    for (i = 0; i < salaries.length - 1; i++) {
        sum += salaries[i];
    }
    //Set the average equal the the sum of the salaries array and divide it by the number of salaries
    averageSalary = (sum / salaries.length);

    //Use a for loop to find the highest salary in the salaries array
    for (j = 0; j < salaries.length; j++) {
        if (salaries[j] > highestSalary) {
            highestSalary = salaries[j];
            //Use the highestSalaryNumber and set it equal to i which will store what number in the array
            //the highest salary is which will be used for what person has that highest salary
            highestSalaryNumber = j;
        }
    }
    //Use the $ and .innerHTML properites to display the final printout message after the use enters the information
    $("results").innerHTML = "<h2>Results:</h2>" + "<p><strong>The average salary is " + averageSalary + " thousand"
        + "</strong></p><p><strong>" + persons[highestSalaryNumber] + " had the highest salary of " + highestSalary + " thousand</strong></p>";

}

//Create a displaySalary() function
function displaySalary() {
    //Create a variable to add table HTML to
    var tableHTML = "";
    //Create the HTML statement for the table
    tableHTML += "<table><tr><th><strong>Employees</strong></th> <th><strong>Salaries</strong></th></tr>"
    for (i = 0; i < salaries.length; i++) {
        tableHTML += "<tr><td><strong>" + persons[i] + "</strong></td><td><strong>" + salaries[i] + " k</strong></td></tr>";
    }
    tableHTML += "</table>";
    //Use the $ to print out the heading and table of salaries by adding the HTML varaiable to the table heading
    $("salary_table").innerHTML = "<h2>Salaries:</h2>" + "<p>" + tableHTML + "</p>";
}

//Use the window object and onload property to give the buttons a function execution onclick
window.onload = function () {
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("user_person").focus();
};