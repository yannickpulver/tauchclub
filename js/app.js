/**
 * Created by yannickpulver on 12.12.16.
 */

var controller = new ScrollMagic.Controller();

$(function() {



    $(".js-page-section-w-header").each(function () {
        var that = $(this);
        new ScrollMagic.Scene({triggerElement: this})
            .addIndicators() // add indicators (requires plugin)
            .on('enter', function () {
                $("#js-header-title").text(that.data("title")).hide().fadeIn();
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

    new ScrollMagic.Scene({triggerElement: "#sand-holder"})
        .setTween("#sand-holder", {y: "50%"})
        .addIndicators()
        .on('enter', function () {
            doClear = true;
            doDraw = true;
        })

        .addTo(controller);
});

//Navigation
$('.Burger').click(function () {
    $('.Menu').fadeToggle();
})