
function addUser(name,picture,number,email){
    window.localStorage.setItem('name'+number,name.first+" "+name.last)
    window.localStorage.setItem('img'+number,picture.medium)
    window.localStorage.setItem('description'+number,"Hello this is my email: "+email+" Where you can talk to me about any doubts you have about our company");
    let title = document.querySelector("#title"+number).textContent=name.first+" "+name.last;
    let img = document.querySelector("#img"+number).src=picture.medium;
    let description = document.querySelector("#description"+number).textContent="Hello this is my email: "+email+" Where you can talk to me about any doubts you have about our company";
    }
    function User(number){
       
        for(let i=1;i<=number;i++){
         document.querySelector("#title"+i).textContent=window.localStorage.getItem('name'+i);
         document.querySelector("#img"+i).src=window.localStorage.getItem('img'+i);
        
         document.querySelector("#description"+i).textContent=window.localStorage.getItem('description'+i);
        }

      
        }  
    export {addUser,User}