const STORE_KEY = "@kirei"
const store = {
    cart: {
        items: [],
        totalPrice: 0,
        discount: 0,
        subTotal: 0
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

function updateTotalPrice() {
    //chamar a api pra retornar o total
}

function updateSubTotalPrice() {
    const newSubTotal = store.cart.items.reduce((a, b) => {

        return a + b.amount * b.price
    }, 0)

    store.cart.subTotal = Number(newSubTotal.toFixed(2))
}

function saveInitialProductsToStore(items) {
    items.forEach(item => store.products.push(item));
    saveStoreToLocalStorage(store)
}

function manipulateStore(newStore) {
    store.products = newStore.products
    store.cart = newStore.cart
}

function addItemToCart(item) {
    const itemIndex = store.cart.items.findIndex(cartItem => cartItem.id === item.id)

    if (itemIndex >= 0) {
        store.cart.items[itemIndex].amount += 1
    } else {
        const newItem = {
            ...item,
            amount: 1
        }
        store.cart.items.push(newItem)
    }
    updateSubTotalPrice()
    saveStoreToLocalStorage(store)
}

function deleteItemFromCart(cartItem) {
    const newItems = store.cart.items.filter(item => item.id !== cartItem.id)
    store.cart.items = newItems
    saveStoreToLocalStorage(store)
}

function decrementAmountFromCartItem(cartItem) {
    const itemIndex = store.cart.items.findIndex(item => item.id === cartItem.id)
    if (itemIndex >= 0 && store.cart.items[itemIndex].amount > 1) {
        store.cart.items[itemIndex].amount -= 1
        saveStoreToLocalStorage(store)
    }
}

export {
    store,
    saveInitialProductsToStore,
    getStoreFromLocalStorage,
    manipulateStore,
    addItemToCart,
    deleteItemFromCart,
    decrementAmountFromCartItem
}