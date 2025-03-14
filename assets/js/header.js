$(document).ready(function () {
    $("#headerMenu").click(function () {
        $(this).toggleClass("active"); // Анимация кнопки
        $(".header__menu-mobile").slideToggle(300); // Плавное появление/скрытие меню
    });

    // Закрытие меню при клике вне его
    $(document).click(function (event) {
        if (!$(event.target).closest(".header__menu-mobile, #headerMenu").length) {
            $(".header__menu-mobile").slideUp(300);
            $("#headerMenu").removeClass("active");
        }
    });
});