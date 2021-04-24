// sticky navbar
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".sticky").addClass("nav-sticky");
        // $(".navbar-brand img").attr("src", "assets/logo/logo-dark.svg");
    } else {
        $(".sticky").removeClass("nav-sticky");
        // $(".navbar-brand img").attr("src", "assets/logo/logo-dark.svg");
    }
});
// end of sticky navbar

// brand slider
$(".brand-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
// end of brand slider
// testimonial slider
$(".test-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
// end of testimonial slider
// test slider
// $(".test").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000
// })
// end test slider
