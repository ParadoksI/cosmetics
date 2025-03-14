$(document).ready(function () {
    $(".declaration__item img").click(function () {
        let imgSrc = $(this).attr("src"); // Получаем путь изображения
        $(".modal-content img").attr("src", imgSrc); // Устанавливаем в модальное окно
        $(".modal-overlay").addClass("active"); // Показываем модальное окно
    });

    // Закрытие окна при клике на фон
    $(".modal-overlay").click(function () {
        $(this).removeClass("active");
    });
});