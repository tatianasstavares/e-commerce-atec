  
function openPopup(message){
    const popup = document.querySelector('#popup');
    const popuptext = document.querySelector('#popup>p')
   popup.classList.add("open-popup"); 
   popuptext.textContent=message;
}  
    export {openPopup}