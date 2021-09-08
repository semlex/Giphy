import header from './modules/header';

import '../scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
    header({
        headerBody: 'header__body',
        headerSearchPanel: 'header__search-panel',
        headerInputField: 'search-panel__field',
        headerLogo: 'header__logo',
        headerButton: 'button',
        searchResBlock: 'search-result__row',
        trendBlock: 'trending__row'
    });

    
    // const searchPanel = document.querySelector('.header__search-panel'),
    //     inputField = document.querySelector('.search-panel__field'),
    //     headerLogo = document.querySelector('.header__logo'),
    //     button = document.querySelector('.button');
    
    // if (document.documentElement.clientWidth < 550) {
    //     const promise = new Promise(function(resolve, reject) {
    //         inputField.classList.add('search-panel__field--no-transition');
    //         resolve();
    //     });

    //     promise.then(() => {
    //         inputField.classList.add('search-panel__field--hidden');
    //     }).then(() => setTimeout(() => inputField.classList.remove('search-panel__field--no-transition')), 1);
    // }

    // searchPanel.style.flexBasis = `${document.querySelector('.header__body').offsetWidth - headerLogo.offsetWidth - getComputedStyle(searchPanel).marginLeft.match(/\d/g).join('')}px`;
    // window.addEventListener('resize', () => {
    //     searchPanel.style.flexBasis = `${document.querySelector('.header__body').offsetWidth - headerLogo.offsetWidth - getComputedStyle(searchPanel).marginLeft.match(/\d/g).join('')}px`;
    //     if (document.documentElement.clientWidth < 550 && !headerLogo.classList.contains('header__logo--hidden')) {
    //         inputField.classList.add('search-panel__field--hidden');
    //     }
    //     if (document.documentElement.clientWidth >= 550 && headerLogo.classList.contains('header__logo--hidden')) {
    //         const promise = new Promise((resolve, reject) => {
    //             searchPanel.classList.remove('header__search-panel--full-width');
    //             resolve();
    //         }).then(() => {
    //             searchPanel.style.flexBasis = `${document.querySelector('.header__body').offsetWidth - 180}px`;
    //         }).then (() => {
    //             setTimeout(() => {
    //                 headerLogo.classList.remove('header__logo--hidden');
    //             }, 1100);
    //         });
    //     }
    //     if (document.documentElement.clientWidth >= 550 && inputField.classList.contains('search-panel__field--hidden')) {
    //         inputField.classList.remove('search-panel__field--hidden');
    //     }
    // });

    // button.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if (inputField.classList.contains('search-panel__field--hidden')) {
    //         const promise = new Promise((resolve, reject) => {
    //             headerLogo.classList.add('header__logo--hidden');
    //             resolve();
    //         }).then (() => {
    //             searchPanel.classList.add('header__search-panel--full-width');
    //         }).then(() => {
    //             inputField.classList.remove('search-panel__field--hidden');
    //         });
    //     }
    // });

    // window.addEventListener('click', e => {
    //     if (!e.target.closest('.header__search-panel') && searchPanel.classList.contains('header__search-panel--full-width')) {
    //         const promise = new Promise((resolve, reject) => {
    //             searchPanel.classList.remove('header__search-panel--full-width');
    //             resolve();
    //         }).then(() => {
    //             inputField.classList.add('search-panel__field--hidden');
    //         }).then (() => {
    //             setTimeout(() => {
    //                 headerLogo.classList.remove('header__logo--hidden');
    //             }, 500);
    //         });
    //     }
    // });
});