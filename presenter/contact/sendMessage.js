import {PostContact} from "../../Api/PostContact.js"
function sendMessage(){

const form =  document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const Name = document.querySelector('#Name');
   const Company = document.querySelector('#Company');
   const Email = document.querySelector('#Email');
   PostContact();
})
}
    export {sendMessage}
