$(document).ready(function(){
    $.getJSON("facultyList.json", function(data) {
            $.each(data, function() {
                    $.each(this, function(key, value) {
                            $("#faculty").append("<img src='" + value.image + "'></img>");
                            $("#faculty").append("<h2>" + value.full_name + "</h2>");
                            $("#faculty").append("<h3>" + value.department + "</h3>");
                            $("#faculty").append("<p>" + value.bio + "</p>");
                    });
            });
    });
});
