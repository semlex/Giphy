import request from './request';

function header({headerBody, headerSearchPanel, headerInputField, headerLogo, headerButton, searchResBlock, trendBlock}) {
        const header = document.querySelector(`.${headerBody}`),
        searchPanel = document.querySelector(`.${headerSearchPanel}`),
        inputField = document.querySelector(`.${headerInputField}`),
        logo = document.querySelector(`.${headerLogo}`),
        searchResultsBlock = document.querySelector(`.${searchResBlock}`),
        trendingBlock = document.querySelector(`.${trendBlock}`),
        button = document.querySelector(`.${headerButton}`);
    
    if (document.documentElement.clientWidth < 550) {
        const promise = new Promise(function(resolve, reject) {
            inputField.classList.add(`${headerInputField}--no-transition`);
            resolve();
        });

        promise.then(() => {
            inputField.classList.add(`${headerInputField}--hidden`);
        }).then(() => setTimeout(() => inputField.classList.remove(`${headerInputField}--no-transition`)), 1);
    }

    searchPanel.style.flexBasis = `${header.offsetWidth - logo.offsetWidth - getComputedStyle(searchPanel).marginLeft.match(/\d/g).join('')}px`;

    window.addEventListener('resize', () => {
        searchPanel.style.flexBasis = `${header.offsetWidth - logo.offsetWidth - getComputedStyle(searchPanel).marginLeft.match(/\d/g).join('')}px`;
        if (document.documentElement.clientWidth < 550 && !logo.classList.contains(`${headerLogo}--hidden`)) {
            inputField.classList.add(`${headerInputField}--hidden`);
        }
        if (document.documentElement.clientWidth >= 550 && logo.classList.contains(`${headerLogo}--hidden`)) {
            const promise = new Promise((resolve, reject) => {
                searchPanel.classList.remove(`${headerSearchPanel}--full-width`);
                resolve();
            }).then(() => {
                searchPanel.style.flexBasis = `${header.offsetWidth - 180}px`;
            }).then (() => {
                setTimeout(() => {
                    logo.classList.remove(`${headerLogo}--hidden`);
                }, 1100);
            });
        }
        if (document.documentElement.clientWidth >= 550 && inputField.classList.contains(`${headerInputField}--hidden`)) {
            inputField.classList.remove(`${headerInputField}--hidden`);
        }
    });

    // button.addEventListener('click', e => {
    //     e.preventDefault();
    //     if (inputField.classList.contains(`${headerInputField}--hidden`)) {
    //         const promise = new Promise((resolve, reject) => {
    //             logo.classList.add(`${headerLogo}--hidden`);
    //             resolve();
    //         }).then (() => {
    //             searchPanel.classList.add(`${headerSearchPanel}--full-width`);
    //         }).then(() => {
    //             inputField.classList.remove(`${headerInputField}--hidden`);
    //         });
    //     }
    // });
    request({
        resultsBlock: trendingBlock,
        key: 'nioAXMr2JLhzIQzEJiaabzA1R07XOx8a'
    });

    searchPanel.addEventListener('submit', e => {
        e.preventDefault();
        if (inputField.classList.contains(`${headerInputField}--hidden`)) {
            const promise = new Promise((resolve, reject) => {
                logo.classList.add(`${headerLogo}--hidden`);
                resolve();
            }).then (() => {
                searchPanel.classList.add(`${headerSearchPanel}--full-width`);
            }).then(() => {
                inputField.classList.remove(`${headerInputField}--hidden`);
            });
        }
        if (inputField.value !== '' && inputField.value !== null && !inputField.classList.contains(`${headerInputField}--hidden`)) {
            document.querySelector('.trending__row').textContent = '';
            document.querySelector('.trending').style.display = 'none';
            document.querySelector('.search-result').classList.remove('search-result--hidden');
            request({
                term: inputField.value,
                resultsBlock: searchResultsBlock,
                key: 'nioAXMr2JLhzIQzEJiaabzA1R07XOx8a'
            });
        }
    });

    window.addEventListener('click', e => {
        if (!e.target.closest(`.${headerSearchPanel}`) && searchPanel.classList.contains(`${headerSearchPanel}--full-width`)) {
            const promise = new Promise((resolve, reject) => {
                searchPanel.classList.remove(`${headerSearchPanel}--full-width`);
                resolve();
            }).then(() => {
                inputField.classList.add(`${headerInputField}--hidden`);
            }).then (() => {
                setTimeout(() => {
                    logo.classList.remove(`${headerLogo}--hidden`);
                }, 500);
            });
        }
    });
}

export default header;