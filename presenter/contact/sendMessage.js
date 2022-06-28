import {PostContact} from "../../Api/PostContact.js"
function sendMessage(){

const form =  document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const Name = document.querySelector('#Name').value;
   const Company = document.querySelector('#Company').value;
   const Email = document.querySelector('#Email').value;
   const Message = document.querySelector('#Message').value;
   PostContact(Name,Company,Email,Message);
})
}
    export {sendMessage}
