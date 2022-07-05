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
                <button class="remove-item-${product.id}">-</button>
                <div><span class="amount-item-${product.id}">${product.amount}</span></div>
                <button class="add-item-${product.id}">+</button>
            </div>
            <button class="button-trash delete-${product.id}">
                <img src="../assets/icons/trash-icon.png" alt="trash icon">
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