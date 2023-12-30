(function ($) {
    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".item"),
            activeClass: "item--active",
            img: ".img"
        }

        // Set the initial background image and color
        selectors.id.css({
            "background-image": "url(" + selectors.item.first().find(selectors.img).attr("src") + ")",
            "background-color": "rgba(255, 255, 255, 0.2)"
        });

        selectors.item.eq(0).addClass(selectors.activeClass);

        var itemLength = selectors.item.length;

        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function (i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);

                if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css({
                        "background-image": "url(" + selectors.item.last().find(selectors.img).attr("src") + ")",
                        "background-color": "rgba(255, 255, 255, 0.5)"
                    });
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 10 && pos >= min) {
                    selectors.id.css({
                        "background-image": "url(" + $(this).find(selectors.img).attr("src") + ")",
                        "background-color": "rgba(255, 255, 255, 0.5)"
                    });
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);

$("#shell").timeline();






// back to top 按钮

document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    var backToTopBtn = document.getElementById("backToTopBtn");

    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        // Show or hide the button based on the scroll position
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Add a click event listener to scroll to the top when the button is clicked
    backToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});