function usersRoutes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World from users.js');
    });

    app.get('/hello/name', (req, res) => {

    });

    app.get('/logout', (req, res) => {

    });
}


//Export routes from users.js
module.exports = usersRoutes;