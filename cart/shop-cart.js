
import beers from '../data/beers.js';
import { findById, getCart } from '../utils.js';
import { orderTotal } from '../utils.js';
import { toUSD } from '../utils.js';


import { renderCartItem } from './render-cart-item.js';

const clearButton = document.getElementById('clear');
const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('total');
const cart = getCart();

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const beer = findById(beers, lineItem.id);
    const dom = renderCartItem(lineItem, beer);

    tbody.appendChild(dom);
}

const cartTotal = orderTotal(cart, beers);

orderTotalCell.textContent = toUSD(cartTotal);


clearButton.addEventListener('click', () => {
    console.log(clear)
    localStorage.clear();
    const clearCart = getCart();
  
        
       


});

