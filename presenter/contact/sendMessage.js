import {postContact} from "../../api/postContact.js"
import {removeWarning ,addWarning,addWarningEmail } from "./components/warning.js";

function sendMessage(){

const form =  document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const name = document.querySelector('#name');
   const email = document.querySelector('#email');
   const message = document.querySelector('#message');
   if(name.value==""){
    addWarning(name.id)
  
   }
  else if(email.value==""){
    addWarning(email.id)
    removeWarning(name.id)
   }
   else if (email.value.includes("@")==false){
    addWarningEmail (email.id)
   }
  else if( message.value==""){
    addWarning(message.id)
    removeWarning(name.id)
    removeWarning(email.id)
   }
  else{
    postContact(name.value,email.value,message.value);
    removeWarning(name.id)
    removeWarning(email.id)
    removeWarning(message.id)
  }
   
})
}
    export {sendMessage}
