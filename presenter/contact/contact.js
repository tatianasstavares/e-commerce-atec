import { GetApiRandomUser } from "../../Api/GetRandomUser.js"
import { init } from "../../main.js"
import { User } from "./addUser.js"
import { sendMessage } from "./sendMessage.js"

await init()
sendMessage()

if (window.localStorage.getItem('name1') == null || window.localStorage.getItem('name2') == null) {
   GetApiRandomUser()
} else {
   User(2)
}
