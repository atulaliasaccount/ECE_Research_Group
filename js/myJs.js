$(document).ready(function(){

    var startSlider = function() {
            $("#slider1").responsiveSlides({
                auto: true,
                pager: true,
                nav: true,
                speed: 500,
                namespace: "centered-btns"
            });
            };

    startSlider();
});
