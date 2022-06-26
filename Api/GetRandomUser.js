function GetApiRandomUser(){
    
    fetch('https://randomuser.me/api/')
    .then (response => {
        return response.json()
    } )
    .then (data =>{
       console.log(data);
        
    }) 
    /*.catch(function(error) {
        h1(1)
      })
      */
    }
    export {GetApiRandomUser}
    