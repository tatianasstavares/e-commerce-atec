import { store } from "../../store/store.js"
import { loadHeaderAndfooter } from "../../view/components/loadComponents.js"
import { renderMainProductCard } from "../../view/components/shop/mainProductCard.js"

loadHeaderAndfooter()

const productsContainerEl = document.querySelector(".products-container")
const searchInputEl = document.querySelector('.search-input')

function loadShopScreen(products) {
    console.log(store);
    const productsList = products.map(product => renderMainProductCard(product)).join("")
    productsContainerEl.innerHTML = productsList
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


