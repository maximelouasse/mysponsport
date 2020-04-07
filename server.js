/*
Imports
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const ejs = require('ejs');
    const cookieParser = require('cookie-parser');

    // Inner
    const mongoDB = require('./services/db.service');
    const { mainRouter } = require('./routes/main.router');
    const List = require('./database/models/list');
    const Task = require('./database/models/task');

//

/*
Server Configuration
*/
    // Define server
    const port = process.env.PORT;
    const server = express();

    // Define server class
    class ServerClass {
        // Initialization fonction
        init() {
            // View engine configuration
            /*server.engine( 'html', ejs.renderFile );
            server.set('view engine', 'html');

            // Static path configuration
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            //=> Use CookieParser to setup serverside cookies
            //server.use(cookieParser(process.env.COOKIE_SECRET));*/

            server.use(express.json());
            server.use((req, res, next) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
            });

            //=> Use BodyParser to get user body data
            server.use(bodyParser.json({ limit: '10mb' }));
            server.use(bodyParser.urlencoded({ extended: true }));

            //=> Set server main router
            server.use('/', mainRouter);
            
            // Routes
            /*server.get('/lists', (req, res) => {
                List.find({})
                    .then(lists => res.send(lists))
                    .catch((error) => console.log(error))
            });

            server.post('/lists', (req, res) => {
                (new List({ 'title': req.body.title }))
                    .save()
                    .then((list) => res.send(list))
                    .catch((error) => console.log(error));
            });

            server.get('/lists/:listId', (req, res) => {
                List.find({ _id: req.params.listId })
                    .then((list) => res.send(list))
                    .catch((error) => console.log(error));
            });

            server.patch('/lists/:listId', (req, res) => {
                List.findOneAndUpdate({ _id: req.params.listId }, { $set: req.body })
                    .then((list) => res.send(list))
                    .catch((error) => console.log(error));
            });

            server.delete('/lists/:listId', (req, res) => {
                const deleteTasks = (list) => {
                    Task.deleteMany({ _listId: list._id })
                        .then(() => list)
                        .catch((error) => console.log(error));
                };
                
                List.findByIdAndDelete(req.params.listId)
                    .then((list) => res.send(deleteTasks(list)))
                    .catch((error) => console.log(error));
            });

            ///////////////////////////////////////////////////

            server.get('/lists/:listId/tasks', (req, res) => {
                Task.find({ _listId: req.params.listId })
                    .then((tasks) => res.send(tasks))
                    .catch((error) => console.log(error));
            });

            server.post('/lists/:listId/tasks', (req, res) => {
                (new Task({ _listId: req.params.listId, 'title': req.body.title }))
                    .save()
                    .then((task) => res.send(task))
                    .catch((error) => console.log(error));
            });

            server.get('/lists/:listId/tasks/:taskId', (req, res) => {
                Task.findOne({ _listId: req.params.listId, _id: req.params.taskId })
                    .then((task) => res.send(task))
                    .catch((error) => console.log(error));
            });

            server.patch('/lists/:listId/tasks/:taskId', (req, res) => {
                Task.findOneAndUpdate({ _listId: req.params.listId, _id: req.params.taskId }, { $set: req.body })
                    .then((task) => res.send(task))
                    .catch((error) => console.log(error));
            });

            server.delete('/lists/:listId/tasks/:taskId', (req, res) => {
                Task.findByIdAndDelete({ _listId: req.params.listId, _id: req.params.taskId })
                    .then((task) => res.send(task))
                    .catch((error) => console.log(error));
            });*/

            // Start server
            this.launch();
        }

        launch() {
            // Connnect MongoDB
            mongoDB.initClient()
            .then( db => {
                // Launch server
                server.listen(port, () => console.log({ 
                    db: db, 
                    server: `Server is running on port ${port}` 
                }))
            })
            .catch( err => {
                console.log(err)
            })
        }
    }
//

/*
Start server
*/
    new ServerClass().init();
//