import header from './modules/header';

import '../scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
    header({
        headerBody: 'header__body',
        headerSearchPanel: 'header__search-panel',
        headerInputField: 'search-panel__field',
        headerLogo: 'header__logo',
        searchResBlock: 'search-result__row',
        trendBlock: 'trending__row'
    });
});