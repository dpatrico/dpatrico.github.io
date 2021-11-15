$(document).ready(function () {
        var images;
        var captions;

        // preload the image for each link
        //get the image URL and cpation for each image and save them into the respective variables created
        $("#image_list a").each(function () {
                images = $(this).attr("href");
                captions = $(this).attr("title");
        });

        //This creates all of the new images to preload them onto the page
        (new Image()).src = this;


        // set up the event handlers for each link

        //Fade the caption and image out and then in over a duration of 3 seconds (3000)        
        $("#image").fadeOut(2000,
                function () {
                        $("#image").attr("src", url).fadeIn(2000);
                });
        $("#caption").fadeOut(2000,
                function () {
                        $("#caption").text(title).fadeIn(2000);
                });


        // get the image URL and caption for each image and animate the caption

        // cancel the default action of each link


        // move the focus to the first link

}); // end ready