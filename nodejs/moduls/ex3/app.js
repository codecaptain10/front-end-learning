/*Example 3:
  - Share date with an API interface
  - Two methods
      1) show nams all users
      2) show name from one user
  - Using JS methods: map(), forEach(), find()
  - user.js is an API interface t=with two methods, which we can use when we import this module to module we run in console
*/

//import users module
const users = require('./users');

//show all users
users.showUsers();

//show user with id 2
users.showUserObj(2);