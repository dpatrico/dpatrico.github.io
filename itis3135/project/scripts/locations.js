//This will be the JavaScript file for the location's available webpage

//This script will consist of a format for zip codes as well as a way to check
//if that zip code is within an area where services will be provided and display 
//back to the user if it is or not

function checkIfAvailable(zip) {
    //This is the list of all the zip codes where his services are provided
    //From zip (11930) to (11980) is Suffolk County
    //From zip (11507) to (11598) is Nassau County
    let valid_zip = ["11930", "11931", "11702", "11706", "11705", "11715", "11716", "11717", "11932", "11718", "11719", "11933",
        "11934", "11720", "11721", "11722", "11724", "11725", "11726", "11727", "11935", "11729", "11730", "11939", "11940", "11731",
        "11772", "11942", "11786", "11941", "11738", "06390", "11768", "11739", "11740", "11944", "11946", "11788", "11741", "11742",
        "11743", "11746", "11749", "11751", "11752", "11947", "11970", "11754", "11755", "11948", "11757", "11949", "11950", "11951",
        "11952", "11763", "11747", "11953", "11764", "11954", "11955", "11766", "11767", "11956", "11701", "11703", "11713", "11968",
        "11963", "11769", "11770", "11957", "11958", "11777", "11959", "11960", "11972", "11961", "11901", "11778", "11779", "11962",
        "11782", "11784", "11733", "11964", "11965", "11967", "11787", "11789", "11971", "11937", "11780", "11790", "11794", "11776",
        "11973", "11792", "11975", "11976", "11704", "11795", "11796", "11977", "11978", "11798", "11980", "11507", "11509", "11510",
        "11709", "11714", "11548", "11514", "11516", "11549", "11576", "11554", "11732", "11518", "11003", "11001", "11010", "11520",
        "11530", "11542", "11545", "11547", "11023", "11021", "11550", "11557", "11801", "11096", "11558", "11753", "11024", "11042",
        "11559", "11756", "11560", "11561", "11563", "11565", "11030", "11758", "11762", "11566", "11765", "11501", "11710", "11040",
        "11572", "11804", "11568", "11771", "11803", "11569", "11050", "11570", "11575", "11577", "11579", "11783", "11735", "11791",
        "11553", "11556", "11020", "11580", "11581", "11793", "11552", "11590", "11596", "11797", "11598"]
    return (valid_zip.indexOf(zip) >= 0)
}

//This is the function to validate the zipcodes
function validateZip() {
    let zip = document.getElementById("zipCode").value;
    let message = ""
    if (checkIfAvailable(zip)) {
        message = "Congrats! Our service is available in this area!";
    }
    else if (zip.length == 0) {
        message = "";
    }
    else if (zip.length < 5 || zip.length > 5) {
        message = "Please enter a valid zip code";
    }
    else {
        message = "Sorry! Our service is not available in this area.";
    }
    document.getElementById("message").innerHTML = message;
}
