import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { accordionInit } from './accordion';
import { headerLinksHighLight } from './headerLinkHighLight';

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
    accordionInit();
    headerLinksHighLight();
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

const faqNav = document.querySelectorAll('.faq__menu-item');
if (faqNav.length) {
    const sections = Array.from(faqNav).map((item) => document.querySelector(item.getAttribute('href')));
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeItem = document.querySelector(`.faq__menu-item[href="#${id}"]`);

                    document.querySelectorAll('.faq__menu-item').forEach((item) => item.classList.remove('faq__menu-item--active'));
                    activeItem.classList.add('faq__menu-item--active');
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

const faqMenuMobile = document.querySelector('.faq__menu-title');
if (faqMenuMobile) {
    faqMenuMobile.addEventListener('click', () => {
        document.querySelector('.faq__menu-wrap').classList.toggle('faq__menu-wrap--active');
        document.querySelector('.faq__menu-arrow').classList.toggle('faq__menu-arrow--active');
    });
}
