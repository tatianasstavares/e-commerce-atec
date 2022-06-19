import { getAllProductsFromApi } from './presenter/products.js'
import { getStoreFromLocalStorage, manipulateStore, saveInitialProductsToStore, store } from './store/store.js';
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
async function init() {
  try {
    const storeFromLocalStorage = getStoreFromLocalStorage()
    if (Boolean(storeFromLocalStorage)) {
      manipulateStore(storeFromLocalStorage)
    } else {
      const productsFromApi = await getAllProductsFromApi();
      saveInitialProductsToStore(productsFromApi)
    }
  } catch (error) {
    console.error(error)
  }
}

init()

