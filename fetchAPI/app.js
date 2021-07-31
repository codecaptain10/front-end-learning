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
        .then(json => showUsers(json.results))
        .catch(err => console.log(err))
}


//function showUsers
const showUsers = (users) => {
    const resultArea = document.querySelector('.user-list');

    users.forEach(user => {
        const item = document.createElement('div');

        item.className = 'user';
        item.innerHTML = `<div class="user-name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}
        </div> <div class="user-email">${user.email}</div>`
            // Alternat also picture: <img class="user__image" src=${user.picture.medium}">

        resultArea.appendChild(item);

    });
}

//Search button
const searchButton = document.querySelector('.generator');


//-----EVENTS-----

//Event for download users
searchButton.addEventListener('submit', getUsers);