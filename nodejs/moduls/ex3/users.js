//Users list (array)
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jacob" },
    { id: 3, name: "Matt" }
]

//API interface to data listen 
module.exports = {
    //First function: show names from all users
    showUsers() {
        //names
        const names = users.map(user => user.name);
        console.log('Our users: ');
        names.forEach(name => console.log("- " + name));
    },

    //Second function: show user object
    showUserObj(id) {
        console.log(`User with ID ${id}: `);
        const user = users.find(user => id === user.id);
        console.log(user);

    }
}