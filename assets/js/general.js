document.addEventListener("DOMContentLoaded", () => {
    const blurElements = document.querySelectorAll(".blur-effect");

    blurElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            document.body.classList.add("blur-active");
        });

        element.addEventListener("mouseleave", () => {
            document.body.classList.remove("blur-active");
        });
    });

    function initAnimatedButton() {
        if (window.innerWidth <= 1200) return; // Проверяем ширину экрана
    
        document.querySelectorAll(".animated__button").forEach(button => {
            const img = button.querySelector("img");
    
            if (!img) return;
    
            const updateWidth = () => {
                const imgWidth = img.getBoundingClientRect().width; // Получаем реальную ширину
                if (imgWidth > 0 && imgWidth < 200) { // Фильтруем аномальные значения
                    button.style.setProperty("--img-width", `${imgWidth}px`);
                }
            };
    
            if (img.complete) {
                updateWidth();
            } else {
                img.onload = updateWidth;
            }
    
            window.addEventListener("resize", updateWidth);
        });
    }
    
    // Запускаем при загрузке
    initAnimatedButton();
    
    // Проверяем изменение экрана и перезапускаем
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1200) {
            initAnimatedButton();
        }
    });

    const popup = document.querySelector(".popup__form");
    const closeBtn = document.getElementById("closePopup");
    const wrapper = document.querySelector(".popup__form__wrapper");

    // Открытие попапа
    document.querySelectorAll(".toggle__popup").forEach(button => {
        button.addEventListener("click", () => {
            popup.classList.add("active");
            document.body.style.overflow = "hidden"; // Блокируем скролл
        });
    });

    // Закрытие по кнопке
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
        document.body.style.overflow = ""; // Восстанавливаем скролл
    });

    // Закрытие при клике вне контента
    popup.addEventListener("click", (event) => {
        if (!wrapper.contains(event.target)) {
            popup.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
    
});