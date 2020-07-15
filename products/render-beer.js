// Function to render a new instance of product to the page

function renderBeer(beer) {
    const li = document.createElement('li');
    const h3Li = document.createElement('h3');
    h3Li.textContent = beer.name;
    li.append(h3Li);

    li.classList.add(beer.category);
    
    li.title = beer.description;
    
    li.append(h3);
    const p = document.createElement('p');

    p.className = 'price';
    li.append(p);
                                       
  
   
    const imgLi = document.createElement('img');
    imgLi.src = '../assets/' + beer.image;
    imgLi.alt = beer.name + ' image';
    li.append(imgLi);

    
    const usd = '$' + beer.price.toFixed(2);
   

    
    p.textContent = usd;
    
  

    return li;
}
export default renderBeer;

