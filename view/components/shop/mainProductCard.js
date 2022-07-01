const renderMainProductCard = (product) => {
    const {
        category,
        description,
        id,
        image,
        price,
        rating: {
            rate
        },
        title,
    } = product

    let rating = ""
    for (let i = 0; i < 5; i++) {
        if (i < rate) {
            rating += `<img src="/assets/icons/filled-star.png" alt="filled start">`
        } else {
            rating += `<img src="/assets/icons/empty-star.png" alt="filled start">`
        }
    }

    const mainProductCard = `
    <div class="product-card-container">
        <div class="image-container">
            <img src="${image}" alt="product">
        </div>
        <div class="product-info-container">
            <div>
                <p class="product-title">${title}</p>
                <p class="product-category">${category}</p>
            </div>
            <div class="product-price">
                $${price}
            </div>
        </div>
        <div class="star-cart-container">
            <div class="star-container">
                ${rating}
            </div>
            <div class="product-cart-img-container">
                <img class="product-cart" src="/assets/icons/shopping-cart-icon-black.png" alt="">
            </div>
        </div>
    </div>
    `

    return mainProductCard
}

export {
    renderMainProductCard
}