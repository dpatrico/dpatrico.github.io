//I used this website to help me build the slideshow:
//https://www.w3schools.com/howto/howto_js_slideshow.asp

//Create a variable to hold the value of the index in the slideshow
var slideshowIndex = 1;
//Call the displaySlides function and pass in the parameter of the slideshow index
displaySlides(slideshowIndex);

//Create a function to control the previous and next slide using the displaySlides function
//Use the value of n to set the slideshow index to add itself plus the value of n in order to move to the next or previous slide
function nextSlide(n) {
    displaySlides(slideshowIndex += n);
}

//Create a function that will display the current slide using the displaySlides function
//The current slide would be the value of n so set the slideshowIndex to that value
function currentSlide(n) {
    displaySlides(slideshowIndex = n);
}

//Create the displaySlides function to allow for the webpage to display all the images
function displaySlides(n) {
    //Create a variable that uses the class name for each slide in the slideshow
    var slides = document.getElementsByClassName("slides");
    //If n is greater than the amount of slides set the slideshowIndex back to 1 which would be the first slide
    //This is used for when you click next on slide 6 it will wrap back around to the first one
    if (n > slides.length) {
        slideshowIndex = 1;
    }

    //If n is less than 1 then set the slideshowIndex back to the amount of slides there are which would be the last slide
    //This is used for when you click previous on slide 1 it will wrap back around to the last slide
    if (n < 1) {
        slideshowIndex = slides.length;
    }

    //Create a for loop that will not display the slides but will allow for each slide to preload onto the page.
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Use a "display: block" so the slides that are already preloaded will then display whatever image is at one less than the slideshowIndex
    slides[slideshowIndex - 1].style.display = "block";
}



