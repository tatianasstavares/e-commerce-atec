import { footer } from "../../view/components/footer/footer.js";
import { header } from "../../view/components/header/header.js";


function loadHeaderAndfooter() {
    const headerEl = document.querySelector('header');
    const footerEl = document.querySelector('footer');
    headerEl.innerHTML = header
    footerEl.innerHTML = footer
}

export {
    loadHeaderAndfooter
}