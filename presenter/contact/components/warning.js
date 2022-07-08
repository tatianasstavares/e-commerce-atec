
function addWarning(input){

 const  error = document.querySelector('#'+input+"Error");

 error.textContent= '*'+input.charAt(0).toUpperCase() + input.slice(1)+' is mandatory';   

 error.style="padding: 10px; color: red"
}  
function removeWarning(input){
    
 const  error = document.querySelector('#'+input+"Error");
 error.textContent= '';   
 error.style="padding: 0px";
} 
function addWarningEmail(input){

    const  error = document.querySelector('#'+input+"Error");
    error.textContent=  '*'+input.charAt(0).toUpperCase() + input.slice(1)+' must have an @';   
   
    error.style="padding: 10px; color: red"
   }  
    export {removeWarning,addWarning,addWarningEmail}