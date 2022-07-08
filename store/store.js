import { getDiscount } from "../Api/discountApi.js"

const STORE_KEY = "@kirei"
const store = {
    cart: {
        items: [],
        totalPrice: 0,
        discount: 0,
        discountValue: null,
        subTotal: 0,
        code: null,
        couponMessage: null,
        checkoutMessage: null
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

async function updateTotalPrice(code = store.cart.code) {

    if (!code) {
        store.cart.totalPrice = store.cart.subTotal
        saveStoreToLocalStorage(store)
        return
    }

    const discountData = await getDiscount(code)
    const discountValue = discountData?.couponcode?.discount


    if (Boolean(discountValue)) {
        store.cart.discount = (discountValue * store.cart.subTotal) / 100
        store.cart.totalPrice = store.cart.subTotal * ((100 - discountValue) / 100)
        store.cart.code = code
        store.cart.discountValue = discountValue
        store.cart.couponMessage = `Coupon ${code} applied.`
    } else {
        store.cart.totalPrice = store.cart.subTotal
        store.cart.couponMessage = "Invalid coupon"

    }

    saveStoreToLocalStorage(store)
}

function updateSubTotalPrice() {
    const newSubTotal = store.cart.items.reduce((a, b) => {
        return a + b.amount * b.price
    }, 0)

    store.cart.subTotal = Number(newSubTotal.toFixed(2))
    saveStoreToLocalStorage(store)
}

function saveInitialProductsToStore(items) {
    items.forEach(item => store.products.push(item));
    saveStoreToLocalStorage(store)
}

function manipulateStore(newStore) {
    store.products = newStore.products
    store.cart = newStore.cart
    saveStoreToLocalStorage(store)
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
    updateTotalPrice()
    saveStoreToLocalStorage(store)
}

function deleteItemFromCart(cartItem) {
    const newItems = store.cart.items.filter(item => item.id !== cartItem.id)
    store.cart.items = newItems
    updateTotalPrice()
    updateSubTotalPrice()
    saveStoreToLocalStorage(store)
}

function decrementAmountFromCartItem(cartItem) {
    const itemIndex = store.cart.items.findIndex(item => item.id === cartItem.id)
    if (itemIndex >= 0 && store.cart.items[itemIndex].amount > 1) {
        store.cart.items[itemIndex].amount -= 1
        updateSubTotalPrice()
        updateTotalPrice()
        saveStoreToLocalStorage(store)
    }
}

function checkout(message) {
    store.cart = {
        items: [],
        totalPrice: 0,
        discount: 0,
        discountValue: null,
        subTotal: 0,
        code: null,
        couponMessage: null,
        checkoutMessage: message
    }
    saveStoreToLocalStorage(store)
}

export {
    store,
    saveInitialProductsToStore,
    getStoreFromLocalStorage,
    manipulateStore,
    addItemToCart,
    deleteItemFromCart,
    decrementAmountFromCartItem,
    updateTotalPrice,
    updateSubTotalPrice,
    checkout
}