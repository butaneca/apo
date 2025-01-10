$(document).ready(function() {
    $("#search_cloud .search_cloud_inner").length && $.get("ajax/search_cloud.php", function(a) {
        var n = "";
        $.each(a, function(a, c) {
            n += '<a href="' + c.link + '" class="horizontal_product_scrolling_box_labels" title="' + c.title + '"><span>' + c.name + "</span></a>"
        }), $("#search_cloud .search_cloud_inner").html(n)
    })
});