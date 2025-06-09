import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    speed: 600,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header__link');
    const currentPath = window.location.pathname;

    links.forEach((link) => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.classList.add('header__link--active');
        }
    });
});

const navItems = document.querySelectorAll('.how__nav-item');
if (navItems.length) {
    const sections = Array.from(navItems).map((item) => document.querySelector(item.getAttribute('href')));
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeItem = document.querySelector(`.how__nav-item[href="#${id}"]`);

                    document.querySelectorAll('.how__nav-item').forEach((item) => item.classList.remove('how__nav-item--active'));
                    activeItem.classList.add('how__nav-item--active');
                }
            });
        },
        {
            rootMargin: '0px 0px -65% 0px',
            threshold: 0,
        }
    );

    sections.forEach((section) => observer.observe(section));
}
