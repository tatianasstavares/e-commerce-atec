  
function openPopup(title,color,message){
    const popup = document.querySelector('#popup');
    const popuptext = document.querySelector('#popup>p')
    const popuptitle = document.querySelector('#popup>h1')
    const popupbutton = document.querySelector('#popup>button')
   popup.classList.add("open-popup"); 
   popuptext.textContent=message;
   popuptitle.textContent=title;
   popupbutton.style.background=color;
}  
    export {openPopup}