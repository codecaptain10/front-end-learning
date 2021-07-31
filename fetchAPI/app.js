//-----VARIABLES-----

//const { response } = require("express");

//url adress
const url = 'https://randomuser.me/api/?results=10';
//Function getUsers
const getUsers = () => {
    //fetch method from window object
    fetch(url)
        .then(response => {
            // console.log(response);
            if (response.status !== 200) {
                throw Error("To nie jest odpowiedź 200");
            } else {
                //JSON to JavaScript Object
                return response.json();
            }
        })
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

//Search button
const searchButton = document.querySelector('button');


//-----EVENTS-----

//Event for download users
searchButton.addEventListener('click', getUsers);