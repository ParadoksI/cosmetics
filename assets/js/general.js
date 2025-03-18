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

    const header = document.querySelector(".header");
    const links = document.querySelectorAll(".header__list a[href^='./index.html#']");
    const sections = {};

    if (!links.length || !header) return;

    // Определяем высоту header для корректировки скролла
    function getHeaderHeight() {
        return window.innerWidth > 1200 ? 108 : 98;
    }

    // Заполняем объект секциями
    links.forEach(link => {
        const sectionId = link.getAttribute("href").split("#")[1];
        const section = document.getElementById(sectionId);
        if (section) {
            sections[sectionId] = section;
        }

        // Добавляем плавный скролл при клике
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const headerHeight = getHeaderHeight();

            window.scrollTo({
                top: section.offsetTop - headerHeight,
                behavior: "smooth",
            });
        });
    });

    // Функция для подсветки активного пункта меню
    function highlightMenu() {
        const scrollPosition = window.scrollY + getHeaderHeight() + 200; // Дополнительный отступ

        for (const sectionId in sections) {
            const section = sections[sectionId];
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                links.forEach(link => link.classList.remove("active"));
                document.querySelector(`.header__list a[href='./index.html#${sectionId}']`).classList.add("active");
                break;
            }
        }
    }

    window.addEventListener("scroll", highlightMenu);
    highlightMenu(); // Проверяем при загрузке страницы
    
});