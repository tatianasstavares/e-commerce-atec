function PostContact(Name,Company,Email,Message){
  
  let _data = {
    fullname:Name,
    email: Email,
    message:Message,
    company:Company
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
    alert(data.message);
  })
    }
    export {PostContact}
    


