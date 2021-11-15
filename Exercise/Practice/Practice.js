var $ = function(id) {
	return document.getElementById(id);
};

var menu = [];
var total = 0;

function addEspresso () {
	menu.push("$1.95 - Espresso - Delicious Espresso. Wanna try it?");
	total = total + 1.95;
}

function addCappuccino () {
	menu.push("$1.95 - Cappuccino - Delicious Cappuccino!");
	total = total + 3.45;
}

function display() {
	document.getElementById("total").innerHTML = "Total = " + parseInt(total).toFixed(2);
	document.getElementById("order").innerHTML = menu[0];
	document.getElementById("order").innerHTML = menu[1];
}

function displayNone() {
	document.getElementById("total").innerHTML = "";
	total = 0;
	document.getElementById("order").innerHTML = "";
	document.getElementById("order").innerHTML = "";
}

function contactUs() {
	document.getElementById("total").innerHTML = "Phone Number: 631-792-2034" + "<br>Email: dpatrico@uncc.edu";
}

window.onload = function() {


	//add onclick event handler for each image
	document.getElementById("espresso").onclick = addEspresso;
	document.getElementById("cappuccino").onclick = addCappuccino;

	// for click event add item to order and update total
	document.getElementById("place_order").onclick = display;
	document.getElementById("clear_order").onclick = displayNone;
	document.getElementById("contact_us").onclick = contactUs;

	// display order and total

	
		
}; // end onload