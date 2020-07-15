
import beers from '../data/beers.js';
import { findById } from '../utils.js';
import { orderTotal } from '../utils.js';
import { toUSD } from '../utils.js';

import { renderCartItem } from './render-cart-item.js';


const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('total');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const beer = findById(beers, lineItem.id);
    const dom = renderCartItem(lineItem, beer);

    tbody.appendChild(dom);
}

const cartTotal = orderTotal(cart, beers);

orderTotalCell.textContent = toUSD(cartTotal);