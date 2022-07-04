import { init } from "../../main.js"
import { addItemToCart, store } from "../../store/store.js"
import { loadHeaderAndfooter, updateHeader } from "../../view/components/loadComponents.js"
import { renderMainProductCard } from "../../view/components/shop/mainProductCard.js"

const productsContainerEl = document.querySelector(".products-container")
const searchInputEl = document.querySelector('.search-input')

productsContainerEl.innerHTML = "<div></div><h1>Loading...</h1>"

await init()

function addToCart(product) {
    addItemToCart(product)
    updateHeader()
}

function loadShopScreen(products) {

    const productsList = products.map(product => renderMainProductCard(product)).join("")
    productsContainerEl.innerHTML = productsList

    const productListItems = productsContainerEl.children


    for (let i = 0; i < productListItems.length; i++) {
        const cartIconContainer = productListItems[i].children[2].children[1]
        cartIconContainer.addEventListener('click', () => addToCart(products[i]))
    }
}

function searchProducts() {
    const searchTerm = searchInputEl.value.toLowerCase();
    const filterAddProducts = store.products.filter((product) => {
        const index = product.title.toLowerCase().indexOf(searchTerm)

        return index >= 0
    })

    loadShopScreen(filterAddProducts)
}

searchInputEl.addEventListener('input', searchProducts)

loadShopScreen(store.products)


