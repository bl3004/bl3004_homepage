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
    var backToTopButton = document.getElementById("backToTop");

    backToTopButton.addEventListener("click", function () {
        // 滚动到页面顶部
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});