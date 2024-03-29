import { store } from "../../../store/store"

const header = () => {
    const amountOfItems = store.cart.items.length
    return `
    <div class="welcome-message">
        <p>Bem-vindo a Botique Kirei</p>
    </div>
    <nav>
        <p><a href="/">Boutique Kirei</a></p>
        <ul class="container-icons">
            <li class="amount-bag-container"><a href="/pages/cart.html"><img src="../assets/icons/shopping-bag-icon.png" alt="shopping bag"></a>${amountOfItems > 0 ? `<div class="amount-bag">${amountOfItems}</div>` : ""}</li>
            <li><a href="/pages/about.html"><img src="../assets/icons/about-icon.png" alt="about page"></a></li>
            <li><a href="/pages/contact.html"><img src="../assets/icons/whatsapp-icon.png" alt="whatsapp icon"></a></li>
        </ul>
    </nav>
`
}

export {
    header,
}