import { openPopup } from "../presenter/contact/openPopup.js";
function PostContact(Name,Email,Message){
  
  let _data = {
    fullname:Name,
    email: Email,
    message:Message,
   
  }    
fetch('http://localhost:6868/contactform', {
    method: 'POST',
    headers: {
     Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    
  body: JSON.stringify(_data), 
  })
  .then(response => {
    return response.json();
  }) 
  .then(data=>{
    openPopup(data.message);
  })
    }
    export {PostContact}
    


