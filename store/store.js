const STORE_KEY = "@kirei"

const store = {
    cart: {
        items: [],
        totalPrice: 0,
        discount: 0
    },
    products: []
}

function saveStoreToLocalStorage(store) {
    localStorage.setItem(STORE_KEY, JSON.stringify(store))
}

function getStoreFromLocalStorage() {
    const storeFromLocalStore = localStorage.getItem(STORE_KEY)

    return Boolean(storeFromLocalStore) ? JSON.parse(storeFromLocalStore) : null
}

function saveInitialProductsToStore(items) {
    items.forEach(item => store.products.push(item));
    saveStoreToLocalStorage(store)
}

function manipulateStore(newStore) {
    store.products = newStore.products
    store.cart = newStore.cart
}

export {
    store,
    saveInitialProductsToStore,
    getStoreFromLocalStorage,
    manipulateStore
}