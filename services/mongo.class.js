/* 
Import
*/
    // NPM moodules
    const mongoose = require('mongoose');
//

    const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

/* 
Define class
*/
    class MONGOClass {
        constructor(){
            // Set MongoDB url
            this.mongoUrl = process.env.MONGO_URL;
        };

        connectDb(){
            return new Promise( (resolve, reject) => {
                mongoose.connect(this.mongoUrl, connectionOptions)
                    .then( db => resolve( { db: db, url: this.mongoUrl } ))
                    .catch( dbErr => reject(`MongoDB not connected`, dbErr) )
            });
        };
    };
//

/* 
Export class
*/
    module.exports = MONGOClass;
//