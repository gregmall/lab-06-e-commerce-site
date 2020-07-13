export function renderBeer(beer) {
    const li = document.createElement('li');
    li.classList.add(beer.category);
    const title = beer.description;
    li.title = title;

    const h3Li = document.createElement('h3');
    h3Li.textContent = beer.name;
    li.append(h3Li);

    const imgLi = document.createElement('img');
    imgLi.src = beer.image;
    imgLi.alt = beer.name + ' image';
    li.append(imgLi);

    const p = document.createElement('p');
    p.className = 'price';
    console.log(beer.price);
    const usd = '$' + beer.price.toFixed(2);
   

    
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = beer.id;
    p.append(button);

    li.append(p);

    return li;
};

