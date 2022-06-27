function addUser(name,picture,number){
    let title = document.querySelector("#title"+number).textContent=name.first+" "+name.last;
    let img = document.querySelector("#img"+number).src=picture.medium;
   
    }
    export {addUser}
    