document.addEventListener("DOMContentLoaded", () => {
    const newsItems = document.querySelectorAll(".news__model__item");
    const modal = document.querySelector(".model__ex__news");
    const modalClose = document.getElementById("modelExNewsClose");
    const modalContent = modal.querySelector(".model__ex__news__content");
    const modalDisc = modal.querySelector(".model__ex__news__disc");
    const modalImg = modal.querySelector(".model__ex__news__image img");

    // Дополнительная информация о новостях
    const newsData = [
        {
            title: "Мы на InterCHARM 2024",
            description: "Уважаемые наши партнеры с 9 по 12 октября мы ждем Вас на выставке InterCHARM!",
            place: "КрокусЭкспо",
            location: "Павильон 2, Зал 10, Стенд 3",
            details: "С удовольствием расскажем о новинках и топах продаж."
        },
        {
            title: "Запуск новой линии",
            description: "Мы запустили новую производственную линию для косметики!",
            place: "ГлавКосметик Завод",
            location: "Производственный корпус 4",
            details: "Теперь мы можем выпускать продукцию ещё быстрее и качественнее!"
        },
        {
            title: "Сотрудничество с международными брендами",
            description: "Мы начали работу с мировыми брендами косметики!",
            place: "Офис в Москве",
            location: "БЦ \"Сити Плаза\", этаж 5",
            details: "Это открывает новые горизонты для нас и наших клиентов."
        },
        {
            title: "Расширение ассортимента",
            description: "Мы добавили в ассортимент более 50 новых наименований!",
            place: "ГлавКосметик Магазин",
            location: "Торговый центр \"Люкс\", 2 этаж",
            details: "Теперь у нас есть решения для всех типов кожи."
        }
    ];

    newsItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            const imgSrc = item.querySelector("img").src;
            const title = item.querySelector("h5").textContent;
            const date = item.querySelector(".news__date").textContent;
            const modalTitle = modal.querySelector(".model__ex__news__disc h3");
            const modalDate = modal.querySelector(".model__ex__news__date");
            const modalDesc = modal.querySelector(".model__ex__news__disc h4");
            const modalPlace = modal.querySelector(".model__ex__news__disc span:nth-of-type(1)");
            // const modalLocation = modal.querySelector(".model__ex__news__disc span:nth-of-type(2)");
            const modalDetails = modal.querySelector(".model__ex__news__disc p:last-of-type");

            // Убираем классы загрузки
            modalContent.classList.remove("loaded");
            modalDisc.classList.remove("loaded");
            modalImg.classList.remove("loaded");

            // Подставляем данные в модалку
            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalDate.textContent = date;
            modalDesc.textContent = newsData[index].description;
            modalPlace.textContent = `Место: ${newsData[index].place}`;
            // modalLocation.textContent = `Наше расположение: ${newsData[index].location}`;
            modalDetails.textContent = newsData[index].details;

            // Показываем модалку с анимацией
            modal.classList.add("active");

            // Имитация загрузки контента (задержка перед анимацией)
            setTimeout(() => {
                modalContent.classList.add("loaded");
            }, 100);

            setTimeout(() => {
                modalImg.classList.add("loaded");
                modalDisc.classList.add("loaded");
            }, 500);
        });
    });

    // Закрытие модального окна
    modalClose.addEventListener("click", () => {
        closeModal();
    });

    modal.addEventListener("click", (e) => {
        if (!e.target.closest(".model__ex__news__content")) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove("active");
        setTimeout(() => {
            modalContent.classList.remove("loaded");
            modalDisc.classList.remove("loaded");
            modalImg.classList.remove("loaded");
        }, 300);
    }
});
