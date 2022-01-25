//---------- Sync code example ----------
// function someFunction() {
//     console.log("We are in a function ...");
//     console.log("Some code to do ...");
// }

// console.log("Start");   //1
// someFunction();         //2
// console.log("End");     //3

//---------- Async code example 1 ----------
// console.log("Start");              //1
// setTimeout(() => {                 //3
//     console.log("Function ...")
// }, 2000);
// console.log("End");                //2

//---------- Async code example 2 ----------
// console.log("Start");

// function loginUser(email, password) {
//     setTimeout(() => {
//         console.log("Now we have the data")
//         return {
//             userName: email
//         };
//     }, 4500);
// }

// const user = loginUser("helloWorld@mail.com", 1234);
// console.log(user); //undefined, beacause loginUser() need to much time to return

// console.log("Finish");

//---------- Callback function ----------
// console.log("Start");

// function loginUser(email, password, callback) {
//     setTimeout(() => {
//         console.log("Now we have the data")
//         callback({
//             userName: email
//         });
//     }, 2500);
// }

// const user = loginUser("helloWorld@mail.com", 1234, (user) => {
//     console.log(user);
// });

// console.log("Finish");

//---------- Callback Hell ----------
// console.log("Start");

// function loginUser(email, password, callback) {
//     setTimeout(() => {
//         console.log("Now we have the data")
//         callback({
//             userName: email
//         });
//     }, 2500);
// }

// function getUserVideos(email, callback) {
//     setTimeout(() => {
//         callback(["video1", "video2", "video3"]);
//     }, 2000);
// }

// function videoDetails(video, callback) {
//     setTimeout(() => {
//         callback(["Title video 1", "Title video 2", "Title video 3"]);
//     }, 3000);
// }

// const user = loginUser("helloWorld@mail.com", 1234, (user) => {
//     console.log(user);
//     getUserVideos("helloWorld@mail.com", (video) => {
//         console.log(video);
//         videoDetails(video[0], (title) => {
//             console.log(title);
//         })
//     })

// });

// console.log("Finish");

//---------- Create a Promise ----------
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("You got the user");
        resolve({
            user: "Szymon",
        });
    }, 2000);
});

promise.then(user => {
    console.log(user);
});

//---------- Create a Promise from functions with callbacks ----------

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve({
                userName: email,
            });
        }, 2500);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Title video 1", "Title video 2", "Title video 3"]);
        }, 3000);
    });
}

loginUser("helloWorld@mail.com", "1234")
    .then(user => getUserVideos(user.email))
    .then(videos => videoDetails(videos[0]))
    .then(details => videoDetails(deatail));

//---------- Promise.all() ----------

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("getting stuff from youtube");
        resolve({
                videos: [1, 2, 3, 4, 5],
            },
            2000
        );
    });
});

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("getting stuff from youtube");
        resolve({
                user: "Name",
            },
            5000
        );
    });
});

Promise.all([yt, fb]).then(result => console.log(result));

//---------- Async/await - syntactic sugar for Promises ----------

async function displayUser() {
    const loggedUser = await loginUser("Szymon", 12345);
    const videos = await getUserVideos(loggedUser.email);
    const detail = await videoDetails(video[0]);
    console.log(detail);
}

displayUser();

async function display() {
    console.log("Show message");
}