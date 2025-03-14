$(document).ready(function () {
    $(".work__item").click(function (event) {
        event.stopPropagation(); // Не даем закрыться при клике на сам элемент

        let faq = $(this).find(".work__item-faq");

        // Скрываем все открытые элементы, кроме текущего
        $(".work__item-faq").not(faq).removeClass("active");

        // Проверяем, нужно ли менять позицию
        let offset = faq.offset();
        let screenHeight = $(window).height();
        let screenWidth = $(window).width();

        if (offset.top + faq.outerHeight() > screenHeight) {
            faq.css({ top: "auto", bottom: "100%" });
        } else {
            faq.css({ top: "", bottom: "" });
        }

        if (offset.left + faq.outerWidth() > screenWidth) {
            faq.css({ left: "auto", right: "0" });
        } else {
            faq.css({ left: "", right: "" });
        }

        // Показываем только текущий элемент
        faq.addClass("active");

        // Таймер на 5 секунд для скрытия
        setTimeout(function () {
            faq.removeClass("active");
        }, 5000);
    });

    // Закрытие при клике вне элемента
    $(document).click(function () {
        $(".work__item-faq").removeClass("active");
    });
});