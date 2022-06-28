function PostContact(){
    
fetch('http://localhost:6868/contactform', {
    Method: 'POST',
    Headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    Body: 
    {
        "fullname":"miguel",
        "email": "mail@mail.pt",
        "message":"texto para guardar"
        },
    Cache: 'default'
 
  })
  .then(response => {
    console.log(response.json);

  }) 
    }
    export {PostContact}
    
