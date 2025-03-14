document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".assortment__item");

    // 👉 *** ДЛЯ ПК (эффект 3D при наведении) ***
    if (window.innerWidth >= 1200) {
        items.forEach(item => {
            const img = item.querySelector(".assortment__item-img");

            item.addEventListener("mousemove", (e) => {
                const rect = item.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                // Глубина зависит от положения курсора
                const z = Math.abs(x) + Math.abs(y) < 0.3 ? 10 : 5;

                img.style.transform = `perspective(1000px) rotateX(${y * 15}deg) rotateY(${x * 15}deg) translateZ(${z}px)`;
            });

            item.addEventListener("mouseleave", () => {
                img.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
            });
        });
    }

    // 👉 *** ДЛЯ МОБИЛОК (3D-эффект при скролле) ***
    if (window.innerWidth < 1200) {
        const section = document.querySelector(".assortment");
        const items = document.querySelectorAll(".assortment__item");
    
        let ticking = false;
        let isActive = false;
    
        function isInViewport(el) {
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        }
    
        function resetTransforms() {
            items.forEach(item => {
                item.style.transform = "none"; // Сбрасываем эффекты
            });
        }
    
        function updateTransforms() {
            if (!isInViewport(section)) {
                if (isActive) {
                    resetTransforms(); // Очищаем анимации, если секция ушла
                    isActive = false;
                }
                ticking = false;
                return;
            }
    
            isActive = true;
            const centerY = window.innerHeight / 2;
    
            items.forEach(item => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.top + rect.height / 2;
                const distance = (itemCenter - centerY) / centerY;
    
                const rotateX = distance * 10;
                const translateZ = Math.abs(distance) * -100;
                const scale = 1 - Math.abs(distance) * 0.15;
    
                item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`;
            });
    
            ticking = false;
        }
    
        function onScroll() {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateTransforms);
            }
        }
    
        window.addEventListener("scroll", onScroll);
    }
    
});
