import {getResource} from '../services/services';

function request({term = null, key, resultsBlock}) {
    resultsBlock.textContent = '';
    let url;
    if (term === null) {
        url = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=21&rating=g`;
    }
    else {
        url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${term}=&limit=21&offset=0&rating=g&lang=en`;
    }
    getResource(url).then(data => {
        data.data.forEach(elem => {
            const gif = document.createElement('img'),
                gifUrl = elem.images.fixed_height.url; 
            gif.src = gifUrl;
            gif.classList.add('gifs-section__gif');
            resultsBlock.append(gif);
        });
    });
}

export default request;