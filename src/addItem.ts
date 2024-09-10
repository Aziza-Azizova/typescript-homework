import { arrayOfItems } from './arrayOfItems.ts'

export function addItems() {
    for(let i=1; i < 2; i++){
        const newItemName = prompt("Please, enter item name:", " ");
        const newItemPrice = Number(prompt("Please, enter item price:", " "));

        if(newItemName && newItemName.trim() !== "" && !isNaN(newItemPrice) && newItemPrice > 0){
            const newItem = {
                name: newItemName.trim(),
                price: newItemPrice
            };
            arrayOfItems.push(newItem)
        } else{
            i--; 
        }
    }
}
