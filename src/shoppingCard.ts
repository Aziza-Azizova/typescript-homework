import { IShoppingCard } from './interfaces';

export function shoppingCard(array:IShoppingCard[]) {
    const card = document.querySelector<HTMLDivElement>('#shopping__card');
    
    if (!card) {
        console.error('Container not found');
        return;
    }

    card.innerHTML = '';
    
    array.map((item) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item__card';

        itemCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>price: $${item.price}</p>
        `;

        card.appendChild(itemCard)
    })
}
