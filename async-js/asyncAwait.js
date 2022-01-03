// ----- Example 1 -----
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

async function someAsyncFunction() {
    await getUserDataPromise();
    await validateDataPromise();
    await registerUserDataPromise();
    await sendEmailPromise();

}

someAsyncFunction();
console.log("Render!");
console.log("Display!");


// ----- Example 2 -----
async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);

}