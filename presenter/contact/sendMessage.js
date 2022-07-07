import {PostContact} from "../../Api/PostContact.js"
import {removewarning ,addwarning,addwarningEmail } from "./components/warning.js";
function sendMessage(){

const form =  document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const Name = document.querySelector('#Name');
   const Email = document.querySelector('#Email');
   const Message = document.querySelector('#Message');
   if(Name.value==""){
    addwarning(Name.id)
  
   }
  else if(Email.value==""){
    addwarning(Email.id)
    removewarning(Name.id)
   }
   else if (Email.value.includes("@")==false){
    addwarningEmail (Email.id)
   }
  else if( Message.value==""){
    addwarning(Message.id)
    removewarning(Name.id)
    removewarning(Email.id)
   }
  else{
    PostContact(Name.value,Email.value,Message.value);
    removewarning(Message.id)
  }
   
})
}
    export {sendMessage}
