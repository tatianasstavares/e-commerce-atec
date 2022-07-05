import { init } from "../../main.js";
import { addItemToCart, decrementAmountFromCartItem, deleteItemFromCart, store } from "../../store/store.js";
import { productCard } from "../../view/components/productCard/productCard.js";

await init()

const { items } = store.cart
const hasProducts = items.length > 0

const cartContainerEl = document.querySelector(".cart-container")
function createCartElement() {
    cartContainerEl.innerHTML = `
        <div>
            <p class="current-car">Current Car</p>
            ${hasProducts ? store.cart.items.map(item => {
        return productCard(item)
    }).join("") : '<h5>Cart is empty</h5>'}
        </div>
`
}

createCartElement()

function updateSpanWithAmount(item) {
    const spanEl = document.querySelector(`.amount-item-${item.id}`)
    const currentItem = store.cart.items.find(cartItem => cartItem.id === item.id)
    if (currentItem) {
        spanEl.textContent = currentItem.amount
    }
}

function increment(item) {
    addItemToCart(item)
    updateSpanWithAmount(item)
}

function decrement(item) {
    decrementAmountFromCartItem(item)
    updateSpanWithAmount(item)
}

function deleteItem(item) {
    deleteItemFromCart(item)
    createCartElement()
    loadEvents()
}


function loadEvents() {
    if (hasProducts) {
        store.cart.items.forEach(item => {
            const addItemToCartButtonEl = document.querySelector(`.add-item-${item.id}`)
            const removeItemFromCartButtonEl = document.querySelector(`.remove-item-${item.id}`)
            const deleteButtonEl = document.querySelector(`.delete-${item.id}`)
            addItemToCartButtonEl.addEventListener("click", () => increment(item))
            removeItemFromCartButtonEl.addEventListener("click", () => decrement(item))
            deleteButtonEl.addEventListener("click", () => deleteItem(item))
        })
    }
}

loadEvents()