/*import beers from '../data/beers.js';
import { renderBeer } from '../products/render-beer.js';
console.log(beers);

*/

const myForm = document.getElementById('add-form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(Date.now());
    const formData = new FormData(myForm);

    const newBeer = {

    
        id: formData.get('id'),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price :formData.get('price'),

    }
console.log(newBeer);
});  