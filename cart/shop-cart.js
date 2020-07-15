import cart from '../data/cart.js';
import beers from '../data/beers.js';
import { findById, orderTotal, toUSD } from '../utils.js';
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
console.log (cart, beers);
console.log(cartTotal);
orderTotalCell.textContent = toUSD(cartTotal);