import { openPopup } from "../presenter/contact/openPopup.js";
function postContact(name,email,message){
  
  let _data = {
    fullname:name,
    email: email,
    message:message,
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
    openPopup(data.message,'Success');
  })
  .catch((error) => {
      openPopup(error.message,'Error');
  });
}


    export {postContact }
    


