document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    // Функция для разбивки текста на слова
    function splitWords(selector) {
        let element = document.querySelector(selector);
        if (element) {
            let words = element.textContent.split(" ");
            element.innerHTML = words
                .map((word) => `<span class="word">${word}</span>`)
                .join(" ");
        }
    }

    // Применяем разбивку к заголовку и описанию
    splitWords(".welcome__title-heading");
    splitWords(".welcome__title-disc-pc");
    splitWords(".welcome__title-disc-mob");

    // Анимация появления h1 (слова поочередно снизу вверх)
    gsap.from(".welcome__title-heading .word", {
        opacity: 0,
        y: 50, // Двигается снизу вверх
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1, // Задержка между словами
    });

    gsap.to(".welcome__title-heading .word", {
        opacity: 1,
        y: 0, // Двигается снизу вверх
        
        ease: "power3.out",
        stagger: 0.1, // Задержка между словами
    });

    // Анимация появления описания (тоже снизу вверх)
    gsap.from(".welcome__title-disc-pc .word", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
    });

    gsap.from(".welcome__title-disc-mob .word", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
    });

    // Анимация блока intro
    gsap.from(".welcome__intro", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.4,
    });

    // Анимация welcome__intro-block
    gsap.from(".welcome__intro-block", {
        opacity: 0,
        scale: 0.9,
        y: -20,
        duration: 1,
        ease: "power2.out",
    });



    gsap.to(".welcome__intro-block", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "easeInOut",
    });

    // FIX: Footer items теперь начинаются ниже и двигаются вверх!
    gsap.from(".welcome__footer-item", {
        opacity: 0,
        y: 30, // Начинают ниже, теперь всё ок
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1,
    });

    gsap.to(".welcome__footer-item", {
        opacity: 1,
        y: 0, // Начинают ниже, теперь всё ок
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1,
    });

    // 1️⃣ ASSORTMENT

    const items = document.querySelectorAll(".work__item");

    gsap.set(items, { opacity: 0, y: 50 }); // Начальное состояние: скрыто и сдвинуто вниз

    ScrollTrigger.create({
        trigger: ".work",
        start: "top 60%", // Секция входит в зону видимости
        end: "bottom 40%", // Секция выходит из зоны видимости
        onEnter: () => {
            gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out"
            });
        },
        onLeave: () => {
            gsap.to(items, {
                opacity: 0,
                y: -50, // Смещаем вверх при исчезновении
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.in"
            });
        },
        onEnterBack: () => {
            gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        },
        onLeaveBack: () => {
            gsap.to(items, {
                opacity: 0,
                y: 50, // Смещаем вниз при исчезновении вверх
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.in"
            });
        }
    });
    
    // 2️⃣ TARA

    gsap.from(".tara__item", {
        scrollTrigger: {
            trigger: ".tara__list",
            start: "top 60%", // Запуск, когда 80% секции в видимости
            end: "top 40%", 
            toggleActions: "play none none reverse", // Обратная анимация при уходе
        },
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)", // Размытие в начале
        duration: 0.8,
        stagger: 0.2, // Задержка между элементами
        ease: "power2.out"
    });

    gsap.fromTo(
        ".declaration__item",
        { opacity: 0, y: 50, filter: "blur(10px)" }, // Исходное состояние: ниже + размытие
        { 
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.2, // Плавное появление по очереди
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".declaration__list",
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse", // Исчезает плавно при уходе
            }
        }
    );
});
