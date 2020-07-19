import beers from './data/beers.js';
export function findById(itemsArray, productId){
    let itemMatch = null;
    for (let i = 0; i < itemsArray.length; i++) {
        if (productId === itemsArray[i].id){
            itemMatch = itemsArray[i];
        }
    }
    return itemMatch;
}

export function orderTotal(cart, beers){
    let total = 0;
    for (let i = 0; i < cart.length; i ++){
        const item = cart[i];
        const beer = findById(beers, item.id);
        const thisTotal = calcTotal(item.quantity, beer.price);
        total += thisTotal;

    }
    return total;
}

export function calcTotal(quantity, price){
    
    
    
    const total = Number(quantity) * Number(price);
    return total;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

export function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function getCart() {
    const firstCart = localStorage.getItem('CART');
    const cart = JSON.parse(firstCart) || [];
    return cart;
}

export function getBeers(){
    let beersHere = JSON.parse(localStorage.getItem('BEERS'));

    if (!beersHere){
        localStorage.setItem('BEERS', JSON.stringify(beers));



        beersHere = JSON.parse(localStorage.getItem('BEERS'));
    }


    return beersHere;
}