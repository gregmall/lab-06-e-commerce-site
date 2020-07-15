import { findById, orderTotal, calcTotal, } from '../utils.js';
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

    const expected = 200;

    const total = calcTotal(quantity, price);

    assert.equal(total, expected);

});

test('calculates value of total order in cart', assert =>{


    const expected = 325;
    const total = orderTotal(cart, beers);
    assert.equal (total, expected);
    



});

