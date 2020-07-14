// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { }
import { renderBeer } from '../render-beer.js';
const test = QUnit.test;

QUnit.module('Render Beer');

test('renders beers', expect => {
   
    // Set up your arguments and expectations
    const PBR = {
        
        id: 'beer',
        name: 'Pabst',
        image: 'assets/pbr.jpg',
        description: 'A cheap beer with a hipster reputation',
        category: 'american-lager',
        price: 2.00
        
        
    };
    const expected = '<li class="american-lager" title="A cheap beer with a hipster reputation"><h3>Pabst</h3><img src="assets/pbr.jpg" alt="Pabst image"><p class="price">$2.00<button value="beer">Add</button></p></li>';
   
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderBeer(PBR);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});
