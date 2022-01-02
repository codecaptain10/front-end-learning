// ----- Example 1 -----
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Przykładowe dane");
    }, 1000);
});

// promise.then(result => {
//     //obietnica zakończyła się pozytywnie
//     console.log(result)
// });

// ----- Example 2: Why not callbacks? Callback Hell -----

//1. get user data
//2. forlumar validation
//3. user register
//4. send email

const getUserData = (callback) => {
    setTimeout(() => {
        console.log("1. Get User Data");
        callback();
    }, 800);

}

const validateData = (callback) => {
    setTimeout(() => {
        console.log("2. Validate Data");
        callback();
    }, 900);
}
const registerUserData = (callback) => {
    setTimeout(() => {
        console.log("3. Register User Data");
        callback();
    }, 700);
}
const sendEmail = (callback) => {
    setTimeout(() => {
        console.log("4. Send Email");
        callback();
    }, 300);
}

//Callback Hell
// getUserData(() => {
//   validateData(() => {
//     registerUserData(() => {
//       sendEmail(() => {
//         console.log("End")
//       })
//     })
//   })
// })



// ----- Example 3: Example 2 with Promises -----

//1. get user data
//2. forlumar validation
//3. user register
//4. send email

const getUserDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1. Get User Data");
            resolve();
        }, 200);
    })

}

const validateDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2. Validate Data");
            resolve();
        }, 2000);
    })
}
const registerUserDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3. Register User Data");
            resolve();
        }, 300);
    })
}

const sendEmailPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("4. Send Email");
            resolve();
        }, 3000);
    })

}

// getUserDataPromise()
//     .then(validateDataPromise)
//     .then(registerUserDataPromise)
//     .then(sendEmailPromise)
//     .then(() => {
//         console.log("End of the prozess")
//     });


// ----- Example 4 -----

const posts = [{
        title: "Post One",
        body: "This is post 1"
    },
    {
        title: "Post Two",
        body: "This is post 2"
    }

];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Error! Something wrong!");
            }

        }, 2000);
    })


}


createPost({
        title: 'Post Three',
        body: "This is post 3"
    })
    .then(getPosts)
    .catch(err => console.log(err));

// ----- Example 5: Promise.all -----
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Goodbye")
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => {
    console.log(values)
});