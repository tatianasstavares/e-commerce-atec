import { addUser } from "../presenter/contact/addUser.js";
function GetApiRandomUser() {

    fetch('https://randomuser.me/api/?results=2')
        .then(response => {
            return response.json()
        })
        .then(data => {
            let number = 0;
            data.results.forEach(data => {
                number = number + 1;
                const { name, picture, email } = data;

                addUser(name, picture, number, email);
            });
        })
}
export { GetApiRandomUser }
