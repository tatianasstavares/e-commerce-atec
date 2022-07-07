  
function openPopup(message,title){
    const popup = document.querySelector('#popup');
    const popuptext = document.querySelector('#popup>p')
    const popuptitle = document.querySelector('#popup>h1')
   popup.classList.add("open-popup"); 
   popuptext.textContent=message;
   popuptitle.textContent=title;
}  
    export {openPopup}