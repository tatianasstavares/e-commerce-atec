import { addUser } from "../presenter/contact/addUser.js";
function getApiRandomUser() {
    const BASE_URL ='https://randomuser.me/api/?results=2';
    fetch(BASE_URL)
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
export { getApiRandomUser }
