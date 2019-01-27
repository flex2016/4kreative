'use strict';

$(document).ready( function() {



    var width = 100,
        perfData = window.performance.timing,
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = ((EstimatedTime/1000)%50) * 100


    // Percentage Increment Animation
    var PercentageID = $(".percentage"),
            start = 0,
            end = 100,
            durataion = time;
            animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

        var range = end - start,
          current = start,
          increment = end > start? 1 : -1,
          stepTime = Math.abs(Math.floor(duration / range)),
          obj = $(id);


        var timer = setInterval(function() {
            current += increment;
            $(obj).text(current);
          //obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

	// setTimeout(function(){
    //     $('.preloader').fadeOut();

    //     $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
    //         $(this).removeClass("visible closing opening").dequeue();
    //     });

	// }, time);

//    FADE OUT EFFECT WHEN CLICK A LINK
    $(document).on("click", "a:not(.lightbox)", function () {
        var newUrl = $(this).attr("href");
        if (!newUrl || newUrl[0] === "#") {
            location.hash = newUrl;
            return;
        }
        $("html").fadeOut("slow", function () {
            location = newUrl;
        });
        return false;
    });

});




$(window).load( function() {


function smokeeffect () {
    var modalTrigger = $('.nav-icon'),
        transitionLayer = $('.cd-transition-layer'),
        transitionBackground = transitionLayer.children(),
        modalWindow = $('.full-menu');

    var frameProportion = 1.78, //png frame aspect ratio
        frames = 25, //number of png frames
        resize = false;

    //set transitionBackground dimentions
    setLayerDimensions();
    $(window).on('resize', function(){
        if( !resize ) {
            resize = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
        }
    });

    //open modal window
    modalTrigger.on('click', function(event){
        event.preventDefault();
        transitionLayer.addClass('visible opening');
        var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
        var showcase = $("#showcase");
            showcase.css('visibility', 'hidden')
            showcase.css(' display', 'none')
            showcase.fadeIn( "slow" )
        setTimeout(function(){
            modalWindow.addClass('visible');
        }, delay);
    });

    //close modal window
    modalWindow.on('click', '.modal-close', function(event){
        event.preventDefault();
        transitionLayer.addClass('closing');
        modalWindow.removeClass('visible');
        transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
            transitionLayer.removeClass('closing opening visible');
            transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
        var showcase = $("#showcase");
        showcase.css('visibility', 'visible')
        showcase.css(' display', 'none')
        showcase.fadeIn( "slow")
        });
    });

    function setLayerDimensions() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

        if( windowWidth/windowHeight > frameProportion ) {
            layerWidth = windowWidth;
            layerHeight = layerWidth/frameProportion;
        } else {
            layerHeight = windowHeight*1.2;
            layerWidth = layerHeight*frameProportion;
        }

        transitionBackground.css({
            'width': layerWidth*frames+'px',
            'height': layerHeight+'px',
        });

        resize = false;
    }

}
smokeeffect()



/*--------------------------------------------------
 Hero Section Height
---------------------------------------------------*/



    // $( ".page-menu li:not(.social) a, .portfolio_filter ul li a").append( "<span></span>" );

    // $('.nav-icon').on("click", function(){
    //         $(this).toggleClass('modal-close');
    // });
    $(function(){
        var showcase = $("#showcase");

        showcase.Cloud9Carousel({
            yPos: 42,
            yRadius: 48,
            mirrorOptions: {
                gap: 12,
                height: 0.2
            },
            buttonLeft: $(".nav > .left"),
            buttonRight: $(".nav > .right"),
            autoPlay: true,
            bringToFront: true,

            onRendered: showcaseUpdated,
            onLoaded: function(){
                showcase.css('visibility', 'visible')
                showcase.css(' display', 'none')
                showcase.fadeIn( 1500 )
            }
        });
        function showcaseUpdated( showcase ){
            var title = $("#item-title").html(
                $(showcase.nearestItem()).attr(' alt')
            )
            var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI)
            title.css('opacity', 0.5 + (0.5 * c))

        }
        $('.nav > button').click( function( e ){
            var b = $(e.target).addClass( 'down' )
            setTimeout( function(){ b.removeClass( 'down' )}, 80)
        });

        $(document).keydown( function( e ){
            switch( e.keyCode ){
                case 37:
                $('.nav > .left').click()
                break

                case 39:
                $('.nav > .right').click()
            }
        });
    });


}); // document load end
