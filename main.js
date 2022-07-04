import { getAllProductsFromApi } from './presenter/products.js'
import { getStoreFromLocalStorage, manipulateStore, saveInitialProductsToStore, store } from './store/store.js';
import { loadHeaderAndfooter } from './view/components/loadComponents.js';
import './style.css'


export async function init() {
  try {
    const storeFromLocalStorage = getStoreFromLocalStorage()
    if (Boolean(storeFromLocalStorage)) {
      manipulateStore(storeFromLocalStorage)
    } else {
      const productsFromApi = await getAllProductsFromApi();
      saveInitialProductsToStore(productsFromApi)
    }
    loadHeaderAndfooter()
  } catch (error) {
    console.error(error)
  }
}
