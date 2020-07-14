// import functions and grab DOM elements
import { renderBeer } from './render-beer.js';

import beers from './beers.js';

const beerList = document.querySelector('#beer');
console.log(beers);
// set event listeners to update state and DOM
for (let i = 0; i < beers.length; i ++)
{
    console.log(beers.length);
    const beer = beers[i];
    const el = renderBeer(beer);
    beerList.appendChild(el);


}
    
