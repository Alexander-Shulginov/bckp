// Стилизует ссылки в шапке
export const headerLinksHighLight = () => {
    const links = document.querySelectorAll('.header__link');
    if (links.length === 0) return;

    const currentPath = window.location.pathname;

    links.forEach((link) => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.classList.add('header__link--active');
        }
    });
};
