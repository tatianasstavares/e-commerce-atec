import { store } from "../../store/store.js"
import { loadHeaderAndfooter } from "../../view/components/loadComponents.js"
import { renderMainProductCard } from "../../view/components/shop/mainProductCard.js"
loadHeaderAndfooter()

const productsContainerEl = document.querySelector(".products-container")

const products = store.products.map(product => renderMainProductCard(product)).join("")

// const products = renderMainProductCard(store.products[0])
productsContainerEl.innerHTML = products

console.log(products, store);
