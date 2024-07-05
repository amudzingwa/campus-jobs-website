document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelector('.dots');
    let dotCount = 3;

    setInterval(() => {
        dotCount = (dotCount % 3) + 1;
        dots.textContent = '.'.repeat(dotCount);
    }, 500);
});
