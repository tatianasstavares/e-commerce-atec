import { getApiRandomUser } from "../../api/getRandomUser.js"
import { init } from "../../main.js"
import {  getUserFromLocalStorage } from "./addUser.js"
import { sendMessage } from "./sendMessage.js"
import { closePopup } from "./closePopup.js"

await init()

sendMessage()
closePopup()

if (localStorage.getItem('name1') == null || localStorage.getItem('name2') == null) {
   getApiRandomUser()
} else {
   getUserFromLocalStorage(2)
}
