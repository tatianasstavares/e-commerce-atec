function addUser(name,picture,number){
    window.localStorage.setItem('name'+number,name.first+" "+name.last)
    window.localStorage.setItem('img'+number,picture.medium)
    let title = document.querySelector("#title"+number).textContent=name.first+" "+name.last;
    let img = document.querySelector("#img"+number).src=picture.medium;
   
    }
    function User(number){
       
        for(let i=1;i<=number;i++){
         document.querySelector("#title"+i).textContent=window.localStorage.getItem('name'+i);
         document.querySelector("#img"+i).src=window.localStorage.getItem('img'+i);
           
        }

      
        }  
    export {addUser,User}
    