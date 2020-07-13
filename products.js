mport fruits from '../data/fruits.js';
import renderFruit from './render-fruit.js';

const list = document.getElementById('fruits');

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    const el = renderFruit(fruit);
    list.appendChild(el);
}