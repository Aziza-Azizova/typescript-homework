import './style.css'
import { shoppingCard } from './shoppingCard.ts'
import { arrayOfItems } from './arrayOfItems.ts'
import { addItems } from './addItem.ts'
import { totalCost } from './totalCost.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <div id="shopping__card"></div>
    <div class="btns">
      <button id="add__item">Add Item</button>
      <button id="calc__total">Total Cost</button>
    </div>
  </div>
`

shoppingCard(arrayOfItems);

document.querySelector<HTMLButtonElement>('#add__item')?.addEventListener('click', () => {
  addItems();
  shoppingCard(arrayOfItems);
});

document.querySelector<HTMLButtonElement>('#calc__total')?.addEventListener('click', () => {
  totalCost();
})

