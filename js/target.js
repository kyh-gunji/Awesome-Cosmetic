$(function() {
    $(".header-right-list").click(function() {
        var $target = $($(this).children("a").attr("href")).offset().top;
        $("html, body").animate({"scrollTop": $target}, 300);
    });
});