
function addwarning(input){

 const  error = document.querySelector('#'+input+"Error");
 error.textContent= 'The '+input+' cant be empty';   

 error.style="padding: 25px; color: red"
}  
function removewarning(input){
    
 const  error = document.querySelector('#'+input+"Error");
 error.textContent= '';   
 error.style="padding: 0px";
} 
function addwarningEmail(input){

    const  error = document.querySelector('#'+input+"Error");
    error.textContent= 'The '+input+' must have an @';   
   
    error.style="padding: 25px; color: red"
   }  
    export {removewarning,addwarning,addwarningEmail}