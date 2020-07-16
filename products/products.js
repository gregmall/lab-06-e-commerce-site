import beers from '../data/beers.js';
import renderBeer from './render-beer.js';

const list = document.getElementById('beer');


for (let i = 0; i < beers.length; i++) {
    const beer = beers[i];
    const el = renderBeer(beer);
    
    list.append(el);
}                              