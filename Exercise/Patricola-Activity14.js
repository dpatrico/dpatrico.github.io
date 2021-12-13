$(document).ready(function () {
    $("#nav_list a").click(function (evt) {
        var title = $(this).attr("title");
        console.log(title);
        var url = './json_files/' + title + '.json'
        var html = "";
        $.getJSON(url, function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("main").html(html);
                    html += "<h1>" + value.title + "</h1>";
                    html += "<h2>" + value.month + "</h2>";
                    html += "<h3>" + value.speaker + "</h3>";
                    html += "<img src =\"" + value.image + "\"";
                    html += "<p>" + value.text + "</p>";
                    $("main").html(html);
                });
            });

        });

    });
}); // end ready
