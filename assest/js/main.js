    $(document).ready(function() {

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
        });



        // nice scroll
        $("html").niceScroll({
            cursorcolor: "#f15b4a",
            cursorwidth: "20px"
        });

    });