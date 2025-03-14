document.querySelectorAll('.assortment__item').forEach(item => {
    const img = item.querySelector('.assortment__item-img'); 

    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Глубина зависит от положения курсора (до 50px вперёд в центре)
        const z = Math.abs(x) + Math.abs(y) < 0.3 ? 10 : 5;

        img.style.transform = `perspective(1000px) rotateX(${y * 15}deg) rotateY(${x * 15}deg) translateZ(${z}px)`;
    });

    item.addEventListener('mouseleave', () => {
        img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
});
