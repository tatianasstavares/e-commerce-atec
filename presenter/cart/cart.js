import { goToPayment} from "../../Api/paymentApi.js";
import { init } from "../../main.js";
import { addItemToCart, decrementAmountFromCartItem, deleteItemFromCart, store } from "../../store/store.js";
import { updateHeader } from "../../view/components/loadComponents.js";
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
    loadCartSummary()
}

function increment(item) {
    addItemToCart(item)
    updateSpanWithAmount(item)
    handleSubmit()
}

function decrement(item) {
    decrementAmountFromCartItem(item)
    updateSpanWithAmount(item)
    handleSubmit()
}

function deleteItem(item) {
    deleteItemFromCart(item)
    createCartElement()
    loadEvents()
    handleSubmit()
}

async function handleSubmit(e) {
    e?.preventDefault()
    const inputValue = store.cart.code || document.querySelector("#coupon").value
    if (!inputValue) {
        return
    }

    await updateTotalPrice(inputValue)
    updateSubTotalPrice()

    loadCartSummary()
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

    const formEl = document.querySelector('form')
    formEl.addEventListener('submit', handleSubmit)

    const purchaseButtonEl = document.querySelector('.purchase-button')
    purchaseButtonEl.addEventListener('click', () => goToPayment(store.cart))

}

function loadCartSummary() {
    const subtotalPriceEl = document.querySelector('.subtotal-price')
    const discountEl = document.querySelector('.discount-value')
    const totalEl = document.querySelector('.total-price')
    
    subtotalPriceEl.textContent = `$${store.cart.subTotal}`
    discountEl.textContent = `-$${store.cart.discount.toFixed(2)}`
    totalEl.textContent = `$${store.cart.totalPrice.toFixed(2)}`

    updateHeader()
}

loadEvents()
loadCartSummary()