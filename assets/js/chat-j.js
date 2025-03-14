$(document).ready(function() {
    let icons = $(".chat-icon");
    let index = 0;

    // Анимация смены иконок каждые 3 секунды
    setInterval(() => {
        if ($("#chat-toggler").is(":visible")) {
            icons.removeClass("active");
            index = (index + 1) % icons.length;
            icons.eq(index).addClass("active");
        }
    }, 3000);

    // Открытие чата
    $("#chat-toggler").click(function() {
        $(".chat-box").addClass("open");
        $(this).hide();
        $("#chat-close").fadeIn();
    });

    // Закрытие чата
    $("#chat-close").click(function() {
        $(".chat-box").removeClass("open");
        $(this).hide();
        setTimeout(() => {
            $("#chat-toggler").fadeIn();
        });
    });
});
