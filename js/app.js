/**
 * Created by yannickpulver on 12.12.16.
 */

var controller = new ScrollMagic.Controller();

$(function () {
    $(".js-page-section-w-header").each(function () {
        var that = $(this);
        new ScrollMagic.Scene({triggerElement: this})
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

    //Makes Sand sparkle around when reaching bottom :)
    new ScrollMagic.Scene({triggerElement: "#sand-holder"})
        .setTween("#sand-holder", {y: "0%"})
        .on('enter', function () {
            doClear = true;
            doDraw = true;
        })
        .triggerHook(0.4)
        .addTo(controller);

    //Pin Main Section, so that the content goes over it
    new ScrollMagic.Scene({
        triggerElement: ".js-page-section-main"
    })
        .setPin(".js-page-section-main")
        .triggerHook('onLeave')
        .addTo(controller);




    $(".js-page-section-two").each(function () {

        var tween = new TimelineMax()
            .add([
                TweenMax.fromTo($(this).find(".js-bubble-one"), 1.8, {
                    top: $(window).height() * 0.8
                }, {top: $(window).height() * 0.2}),
                TweenMax.fromTo($(this).find(".js-bubble-two"), 1.8, {
                    top: $(window).height() * 0.6, scale: 2
                }, {top: 0, scale: 4}),
                TweenMax.fromTo($(this).find(".js-bubble-three"), 1.8, {
                    top: $(window).height() * 0.8,
                    scale: 1.5
                }, {top: $(window).height() * 0.3, scale: 3}),
                TweenMax.fromTo($(this).find(".js-bubble-four"), 1.8, {
                    top: $(window).height() * 0.2,
                    scale: 0.5
                }, {top: -$(window).height() * 0.1, scale: 1}),
                TweenMax.fromTo($(this).find(".js-bubble-five"), 1.8, {
                    top: $(window).height() * 0.8,
                    scale: 1
                }, {top: $(window).height() * 0.4, scale: 2}),
                TweenMax.fromTo($(this).find(".js-bubble-six"), 1.8, {
                    top: $(window).height() * 0.2,
                    scale: 1
                }, {top: 0, scale: 2}),
                TweenMax.fromTo($(this).find(".js-bubble-seven"), 1.8, {
                    top: $(window).height(),
                    scale: 0.5
                }, {top: $(window).height() * 0.5, scale: 1}),
                TweenMax.fromTo($(this).find(".js-bubble-eight"), 1.8, {
                    top: $(window).height() * 1.2,
                    scale: 1
                }, {top: $(window).height() * 0.6, scale: 2}),
            ]);

        // build scene
        new ScrollMagic.Scene({triggerElement: this, duration: $(window).height() * 1.8})
            .setTween(tween)
            .triggerHook(1)
            .addTo(controller);
    });
});

//Navigation
$('.Burger').click(function () {
    $('.Menu').fadeToggle().css("display","flex");
})