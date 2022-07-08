import { init } from "../../main";
import { store } from "../../store/store";

await init()

document.querySelector("h1").textContent = store.cart.checkoutMessage