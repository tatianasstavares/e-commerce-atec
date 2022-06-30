const productCard = (product) => {
    return `
    <section class="products-container">
        <div class="product-card">
            <img src="${product.image}" alt="product">
            <div class="container-info">
                <p>${product.title}</p>
                <span>$${product.price}</span>
            </div>
        </div>
        <div class="container-amount-products">
            <div class="container-amount">
                <button>-</button>
                <button><span>1</span></button>
                <button>+</button>
            </div>
            <button class="button-trash">
                <img src="../assets/icons/trash-icon.png" alt="">
            </button>
        </div>
    </section>
    <div class="divider">
        <hr>
    </div>
`
}




export {
    productCard
}