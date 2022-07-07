
function addwarning(input){

 const  error = document.querySelector('#'+input+"Error");
 error.textContent= '*'+input+' is mandatory';   

 error.style="padding: 10px; color: red"
}  
function removewarning(input){
    
 const  error = document.querySelector('#'+input+"Error");
 error.textContent= '';   
 error.style="padding: 0px";
} 
function addwarningEmail(input){

    const  error = document.querySelector('#'+input+"Error");
    error.textContent=  '*'+input+' must have an @';   
   
    error.style="padding: 10px; color: red"
   }  
    export {removewarning,addwarning,addwarningEmail}