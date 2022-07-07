
function addUser(name, picture, number, email) {
    localStorage.setItem('name' + number, name.first + " " + name.last)
   localStorage.setItem('img' + number, picture.medium)
  localStorage.setItem('description' + number, "Hello this is my email: " + email + " Where you can talk to me about any doubts you have about our company");
    const title = document.querySelector("#title" + number).textContent = name.first + " " + name.last;
    const img = document.querySelector("#img" + number).src = picture.medium;
    const description = document.querySelector("#description" + number).textContent = "Hello this is my email: " + email + " Where you can talk to me about any doubts you have about our company";
}
function getUserFromLocalStorage(number) {

    for (let i = 1; i <= number; i++) {
        document.querySelector("#title" + i).textContent =localStorage.getItem('name' + i);
        document.querySelector("#img" + i).src = localStorage.getItem('img' + i);

        document.querySelector("#description" + i).textContent = localStorage.getItem('description' + i);
    }


}
export { addUser,  getUserFromLocalStorage }