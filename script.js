document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.horizontal-scroll');
    const container = document.querySelector('.container6');
    const items = document.querySelectorAll('.item');
    
    // Clone items to create infinite scrolling effect
    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });

    let scrollAmount = 0;
    let isHovering = false;
    let hoverTimeout;

    function scrollLoop() {
        if (!isHovering) {
            scrollAmount += 1;
            if (scrollAmount >= container.scrollWidth / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
        }
        requestAnimationFrame(scrollLoop);
    }

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            isHovering = true;
            if (hoverTimeout) clearTimeout(hoverTimeout);  // Clear any existing timeout
        });

        item.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                isHovering = false;
            }, 150);  // 0.5s delay before resuming the scroll
        });
    });

    scrollLoop();
});