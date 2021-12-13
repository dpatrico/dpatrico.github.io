$(document).ready(function () {
        // preload the image for each link
        // set up the event handlers for each link
        $("#image_list a").click(function (evt) {

                // get the image URL and caption for each image and animate the caption
                // cancel the default action of each link
                evt.preventDefault();
                var imageURL = $(this).attr("href");
                var caption = $(this).attr("title");

                // add the fade in and out elements
                $("#caption").fadeOut(1000, function () {
                        $("#caption").text(caption).fadeIn(1000);
                });
                $("#image").fadeOut(1000, function () {
                        $("#image").attr("src", imageURL).fadeIn(1000);
                });
        }); //end click

        // move the focus to the first link
        $("li:first-child a").focus();
        $("#image").hide().fadeIn(1000);
        $("#caption").hide().fadeIn(1000);

}); // end ready