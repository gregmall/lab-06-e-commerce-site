import { findById, orderTotal, calcTotal, } from '../utils.js';
import { renderCartItem } from '../cart/render-cart-item.js';
import beers from '../data/beers.js';
import cart from '../data/cart.js';
const test = QUnit.test;

QUnit.module('utils');

test('finds beer by its id', assert => {
   
    // Set up your arguments and expectations
    const array = beers;
    const id = 'pabst';
        
   
    const expected = 'Pabst';

   const findBeer = findById(array, id);
  
  
    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(findBeer.name, expected);
});

test('caluclates line total', assert => {


    // Set up your arguments and expectations
    const quantity = 20;
    const  price = 10;
    
    const quantity1 = 5;
    const  price1 = 10;
    
    const quantity2 = 30;
    const  price2 = 10;
    
    const quantity3 = 20;
    const  price3 = 5;

    const expected = 200; 
    
    const expected1 = 50;
    
    const expected2 = 300;
    
    const expected3 = 100;

    const total = calcTotal(quantity, price);
    const total1 = calcTotal(quantity1, price1);
    const total2 = calcTotal(quantity2, price2);
    const total3 = calcTotal(quantity3, price3);

    assert.equal(total, expected);

});

test('calculates value of total order in cart', assert =>{


    const expected = 325;
    const total = orderTotal(cart, beers);
    assert.equal (total, expected);
    



});

test ('renders a cart item', assert => {
    
    const cartItem = {
       
        id: 'pabst',

        quantity: 3
    };

    const pabst = findById(beers, cartItem.id);
    const expected = '<tr><td class="left">Pabst</td><td>3</td><td>2</td><td class="line-item-total">6</td></tr>';

    const dom = renderCartItem(cartItem, pabst);
    const html = dom.outerHTML;

    assert.equal(html, expected);



});


