//-----VARIABLES-----

//const { response } = require("express");


//Function getUsers
const getUsers = (e) => {
    //event
    e.preventDefault();


    //gender value
    const gender = document.querySelector('.generator-select').value;
    //number of users value
    const usersNumber = document.querySelector('.number-input').value;
    //url adress
    const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${gender === 'both' ? "male,female" : gender}`;
    console.log(url);

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
const searchButton = document.querySelector('.generator');


//-----EVENTS-----

//Event for download users
searchButton.addEventListener('submit', getUsers);