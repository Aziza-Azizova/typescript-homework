import { arrayOfItems } from './arrayOfItems.ts'

export function totalCost() {
    let totalCost = 0;
    arrayOfItems.map((item) => {
        totalCost += item.price;
    });

    alert(`Total Cost of Items: $${totalCost}`);
}
