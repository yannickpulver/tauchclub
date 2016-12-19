/**
 * Created by yannickpulver on 12.12.16.
 */

var controller = new ScrollMagic.Controller();

$(function() {

    new ScrollMagic.Scene({triggerElement: "body"})
        .setTween("body > .js-page-section-main", {y: "50%"})
        .addIndicators()
        .addTo(controller);

    $(".js-page-section-w-header").each(function () {
        var that = $(this);
        new ScrollMagic.Scene({triggerElement: this})
            .addIndicators() // add indicators (requires plugin)
            .on('enter', function () {
                $("#js-header-title").text(that.data("title"));
            })
            .on('leave', function () {
                var prev = that.prev();
                var prevTitle = prev.data("title");
                if (prevTitle == undefined) prevTitle = "";
                $("#js-header-title").text(prevTitle);

            })
            .triggerHook(0.3)
            .addTo(controller);
    });
});