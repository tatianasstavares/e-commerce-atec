import { loadHeaderAndfooter } from "../../view/components/loadComponents.js"
import {GetApiRandomUser} from "../../Api/GetRandomUser.js"
import { User } from "./addUser.js"
import {sendMessage} from "./sendMessage.js"
/*function contact() {
   loadHeaderAndfooter();
   alert("2");
   console.log("3");
}

export {contact}*/

loadHeaderAndfooter()
sendMessag()

if(window.localStorage.getItem('name1')==''||window.localStorage.getItem('name2')==''){
GetApiRandomUser()
}else{
   User(2)
}
