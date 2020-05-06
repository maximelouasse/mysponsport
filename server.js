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
    const MONGOclass = require('./services/mongo.class');
    const { mainRouter } = require('./routers/main.router');

//

/*
Server Configuration
*/
    // Define server
    const port = process.env.PORT;
    const server = express();

    // Define server class
    class ServerClass {
        constructor() {
            this.MONGO = new MONGOclass;
        }

        // Initialization fonction
        init() {
            // View engine configuration
            server.engine( 'html', ejs.renderFile );
            server.set( 'view engine', 'html' );

            // Static path configuration
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            //=> Body-parser
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({ extended: true }));

            // Start server configuration
            this.config();
        }

        config() {
            // Set auth router
            /*const AuthRouterClass = require('./routers/auth.router');
            const authRouter = new AuthRouterClass();
            server.use('/api/auth', authRouter.init());*/

            // Set server main router
            server.use('/api', mainRouter);

            // Set crud router
            /*const CrudRouterClass = require('./routers/crud.router');
            const crudRouter = new CrudRouterClass();
            server.use('/api', crudRouter.init());*/

            // Set front router
            server.get('/*',  (req, res) => res.render('index') );

            // Launch server
            this.launch();
        };

        launch() {
            // Connect MongoDB
            this.MONGO.connectDb()
            .then( db => {
                // Start server
                server.listen(port, () => {
                    console.log({
                        node: `http://localhost:${port}`,
                        mongo: db.url
                    });
                });
            })
            .catch( dbErr => console.log('MongoDB Error', dbErr));
        }
    }
//

/*
Start server
*/
    const serverClass = new ServerClass();
    serverClass.init();
//