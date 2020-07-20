
import { getBeers } from '../utils.js';




const myForm = document.getElementById('add-form');

myForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const formData = new FormData(myForm);

    const newBeer = {

    
        id: formData.get('id'),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: formData.get('price')
      
    };
    
    const existingBeer = getBeers();
    existingBeer.push(newBeer); 
console.log(newBeer);
    const stringBeers = JSON.stringify(existingBeer);
    localStorage.setItem('BEER', stringBeers);
    
    window.location = '../products/index.html';
    
 
});  