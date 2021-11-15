//Use this script to alert the user they have entered the information requred
//and that they are entered into the giveaway to win
function informationEntered() {
    if (document.getElementById("name").value != "" || document.getElementById("number").value != "") {
        alert("Thank you! You're now entered into our giveaway!");
    }
}