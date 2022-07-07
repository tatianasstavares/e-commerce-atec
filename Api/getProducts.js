const BASE_URL = "https://fakestoreapi.com/products/category/women's%20clothing"

async function getAllProductsFromApi() {
    const data = await fetch(BASE_URL)
    const products = await data.json()
    return products
}

export {
    getAllProductsFromApi
}