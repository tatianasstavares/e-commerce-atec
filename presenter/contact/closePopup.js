


  
function closePopup(){
    const popupButton =  document.querySelector('#popup>button');
    popupButton.addEventListener('click',(e)=>{
        console.log("e")
    const popup = document.querySelector('#popup');
    popup.classList.remove("open-popup"); 
    })
}  
    export {closePopup}