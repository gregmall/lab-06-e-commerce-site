// Function to render a new instance of product to the page

export function renderBeer(beer) {
    const li = document.createElement('li');
    const h3Li = document.createElement('h3');
    h3Li.textContent = beer.name;
    li.append(h3Li);

    li.classList.add(beer.category);
    
    li.title = beer.description;
    
    li.append(h3Li);
    const p = document.createElement('p');

    p.className = 'price';
    li.append(p);
                                       
  
   
    const imgLi = document.createElement('img');
    imgLi.src = '../assets/' + beer.image;
    imgLi.alt = beer.name + ' image';
    li.append(imgLi);

    
    const usd = '$' + beer.price.toFixed(2);
   

    
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add To Cart';
    button.value = beer.code;
    p.append(button);
    li.append(p);

    return li;
}
export default renderBeer;

