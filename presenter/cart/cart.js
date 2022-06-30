import { init } from "../../main.js";
import { store } from "../../store/store.js";
import { loadHeaderAndfooter } from "../../view/components/loadComponents.js";
import { productCard } from "../../view/components/productCard/productCard.js";

init()
loadHeaderAndfooter()

const { items } = store.cart
const hasProducts = items.length > 0

const cartContainerEl = document.querySelector(".cart-container")
console.log(store);
// cartContainerEl.innerHTML = `
// <div>
//     <p class="current-car">Current Car</p>
//     ${hasProducts ? store.cart.items.map(item => {
//     return productCard(item)
// }).join("") : '<h5>Cart is empty</h5>'}
// </div>
// `
cartContainerEl.innerHTML = `
<div>
    <p class="current-car">Current Car</p>
    ${store.products.map(item => {
    return productCard(item)
}).join("")}
</div>
`