// ----- Example 1 -----
function greeting(name) {
    alert(`Hello ${name}`);
}

function processUserInput(callback) {
    var name = prompt('Please enter!');
    callback(name);
}

//processUserInput(greeting);

// ----- Example 2 -----
function logA(callback) {
    setTimeout(() => {
        console.log("A");

        const someValue = "Text from A";
        callback(someValue);
    }, 1000);

}

function logB(param) {
    console.log("B")
    console.log(param);
}

//logA(logB);

// ----- Example 3 -----
const arrayNumbers = [1, 3, 5];

const add = (el) => {
    return el + 2;
}
const multiplay = (el) => {
    return el * 2;
}
const divide = (el) => {
    return el - 2;
}

function transformArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    console.log(array);
}

//transformArray(arrayNumbers, add); //[3,5,7]
//transformArray(arrayNumbers, multiplay); //[6,10,14]
//transformArray(arrayNumbers, divide); //[4,8,12]


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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);

}


createPost({
    title: 'Post Three',
    body: "This is post 3"
}, getPosts);