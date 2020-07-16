// Importing data file and functions
import beers from '../data/beers.js';
import { findById, getCart, orderTotal, toUSD } from '../utils.js';
import { renderCartItem } from './render-cart-item.js';

const clearButton = document.getElementById('clear');
const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('total');
const orderButton = document.getElementById('order');
const cart = getCart();
// rendering the page 
for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const beer = findById(beers, lineItem.id);
    const dom = renderCartItem(lineItem, beer);

    tbody.appendChild(dom);
}

const cartTotal = orderTotal(cart, beers);

orderTotalCell.textContent = toUSD(cartTotal);

// clearing values in the shopping cart
clearButton.addEventListener('click', () => {
    
    localStorage.clear();
    location.reload();
  
        
       


});

// Placing order button and clearing the cart
orderButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty');

    } else {
        
        alert('Thanks for your order!');
        localStorage.clear();
        location.reload();

        
    }


});

