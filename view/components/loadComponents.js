import { footer } from "../../view/components/footer/footer.js";
import { header } from "../../view/components/header/header.js";

const headerEl = document.querySelector('header');
const footerEl = document.querySelector('footer');

function loadHeaderAndfooter(amount) {
    headerEl.innerHTML = header()
    footerEl.innerHTML = footer(amount)
}

function updateHeader(amount) {
    headerEl.innerHTML = header(amount)
}

export {
    loadHeaderAndfooter,
    updateHeader
}