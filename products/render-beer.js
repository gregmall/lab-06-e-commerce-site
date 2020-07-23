// Function to render a new instance of product to the page

import { findById } from '../utils.js';
import { getCart } from '../utils.js';
export function renderBeer(beer) {
    const li = document.createElement('li');
    const h3Li = document.createElement('h3');
    h3Li.textContent = beer.name;
    li.append(h3Li);

    
    
    li.title = beer.description;
    
    li.append(h3Li);
    const p = document.createElement('p');

    p.className = 'price';
    li.append(p);
                                       
  
   
    const imgLi = document.createElement('img');
    imgLi.src = '../assets/' + beer.image;
    imgLi.alt = beer.name + ' image';
    li.append(imgLi);

    
    const usd = '$' + beer.price;
   

    
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add To Cart';
    button.value = beer.code;
    button.addEventListener('click', () =>{
        
        const cart = getCart();
        const beerInCart = findById(cart, beer.id);

        if (beerInCart) {
            beerInCart.quantity ++;

        } else {
            const newBeer = {
                id: beer.id,
                quantity: 1

            };
            cart.push(newBeer);
        }

        const stringCart = JSON.stringify(cart);
        localStorage.setItem('CART', stringCart);
        
    
        
    });
    p.append(button);
    li.append(p);

    return li;
}
export default renderBeer;

