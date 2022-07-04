import { init } from "../../main.js";
import { store } from "../../store/store.js";
import { loadHeaderAndfooter } from "../../view/components/loadComponents.js";
import { productCard } from "../../view/components/productCard/productCard.js";

await init()

const { items } = store.cart
const hasProducts = items.length > 0

const cartContainerEl = document.querySelector(".cart-container")
cartContainerEl.innerHTML = `
<div>
    <p class="current-car">Current Car</p>
    ${hasProducts ? store.cart.items.map(item => {
    return productCard(item)
}).join("") : '<h5>Cart is empty</h5>'}
</div>
`