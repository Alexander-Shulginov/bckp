export const accordionInit = () => {
    const accordionHead = document.querySelectorAll('.accordion__head');

    if (!accordionHead.length === 0) return;

    accordionHead.forEach((item) => {
        item.addEventListener('click', () => {
            item.querySelector('.accordion__toggle').classList.toggle('accordion__toggle--active');
            item.nextElementSibling.classList.toggle('accordion__body--active');
        });
    });
};
