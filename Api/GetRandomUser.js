import { addUser } from "../presenter/contact/addUser.js";
function GetApiRandomUser(){
 
    fetch('https://randomuser.me/api/?results=2')
    .then (response => {
        return response.json()
    } )
    .then (data =>{
      let number=0;
       console.log(data.results);
       data.results.forEach(data => {
        number=number+1;
        const {name,picture} = data;
        console.log(name)
        console.log(picture)
        console.log(number)
        addUser(name,picture,number);
       });
    }) 
    }
    export {GetApiRandomUser}
    