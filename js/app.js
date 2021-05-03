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
// typed
$(".element").each(function () {
    var $this = $(this);
    $this.typed({
        strings: $this.attr("data-elements").split(","),
        typeSpeed: 100, // typing speed
        backDelay: 3000, // pause before backspacing
    });
});
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

// Portfolio filter
$(window).on("load", function () {
    var $container = $(".portfolioContainer");
    var $filter = $("#filter");
    $container.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear",
        },
    });
    $filter.find("a").click(function () {
        var selector = $(this).attr("data-filter");
        $filter.find("a").removeClass("active");
        $(this).addClass("active");
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: false,
            },
        });
        return false;
    });
});
