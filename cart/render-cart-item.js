export function renderCartItem(lineItem, beer) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'left';
    nameCell.textContent = beer.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = beer.price;
    tr.appendChild(priceCell);
    
    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = Number(lineItem.quantity) * Number(beer.price);
    totalCell.textContent = total;
    tr.appendChild(totalCell);

    return tr;
}
