//-----VARIABLES-----

//url adress
const url = 'https://randomuser.me/api/?results=10';
//Function getUsers
const getUsers = () => {
    //fetch method from window object
    fetch(url)
        .then(response => console.log(response))
        .catch(err => console.log(err))
}

//Search button
const searchButton = document.querySelector('button');


//-----EVENTS-----

//Event for download users
searchButton.addEventListener('click', getUsers);