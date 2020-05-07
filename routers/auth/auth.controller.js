/*
Import
*/
    const { UserModel, AthleteModel } = require('../../models/index');
    const bcrypt = require('bcryptjs');
//

/*
Methods
*/
    /**
     * Register new identity and user
     * @param body => email: String (unique), password: String
    */
    const register = body => {
        return new Promise((resolve, reject) => {
            // Search user by email
            UserModel.findOne({
                email: body.email
            }, (error, user) => {
                if (error) return reject(error)
                else if (user) return reject('Identity already exist')
                else {
                    // Encrypt user password
                    bcrypt.hash(body.password, 10)
                        .then(hashedPassword => {
                            // Replace pasword
                            const clearPassword = body.password;
                            body.password = hashedPassword;

                            // Set creation and connection date
                            body.creationDate = new Date();
                            body.lastConnection = null;
                            body.isValidated = true;

                            // Register new user
                            UserModel.create(body, (error, user) => {
                                if(error) return reject(error)
                                else {
                                    body.userId = user._id;

                                    AthleteModel.create(body)
                                        .then(mongoResponse => {
                                            resolve({ mongoResponse })
                                        })
                                        .catch(mongoResponse => reject(mongoResponse))
                                }
                            })
                        })
                        .catch(hashError => reject(hashError));
                };
            });

        });
    };

    /**
     * Confirm user identity before login
     * @param body: Object => _id: String, password: String
    */
    const confirmIdentity = body => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findById( body._id, (error, user) => {
                if(error) return reject(error)
                else if(!user) return reject('Unknow identity')
                else {
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) return reject('Password not valid')
                    else {
                        // Change identity state
                        user.isValidated = true;

                        // Save identuty state
                        user.save()
                        .then( mongoResponse => resolve(mongoResponse) )
                        .catch( mongoResponse => reject(mongoResponse) )
                    };
                }
            } )
        })
    };

    /**
     * Login user
     * @param body: Object => email: String, password: String
    */
    const login = (body, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findOne( { email: body.email }, (error, user) => {
                if(error) reject(error)
                else if(!user) reject('Unknow identity')
                else if(!user.isValidated) return reject('Account is not validated')
                else {
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) reject('Password is not valid')
                    else {
                        // Set cookie
                        res.cookie(process.env.COOKIE_NAME, user.generateJwt(user._id), { httpOnly: true });
                        
                        // Define user last connection
                        const lastConnection = user.lastConnexion;

                        // Set user new connection
                        user.lastConnexion = new Date();

                        // Save new connection
                        user.save( (error, user) => {
                            if(error) return reject(error)
                            else {
                                AthleteModel.findOne( { userId: user._id }, (error, athlete) => {
                                    if(error) reject(error)
                                    else if(!athlete) reject('Unknow athlete')
                                    else {
                                        return resolve({ user, athlete });
                                    }
                                });
                            };
                        });
                    };
                };
            });
        });
    };

    /**
     * Set user password
     * @param body: Object => password: String, newPassword: String
    */
    const setPassword = (body, authUser, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findById( authUser._id, (error, user) => {
                
                if(error) reject(error)
                else if(!user) reject('Unknow identity')
                else {
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) return reject('Password not valid')
                    else {
                        // Encrypt user password
                        bcrypt.hash( body.newPassword, 10 )
                        .then( hashedPassword => {
                            // Set new password
                            user.password = hashedPassword;
                            
                            // Set cookie
                            res.cookie(process.env.COOKIE_NAME, user.generateJwt(), { httpOnly: true });

                            // Save new password
                            UserModel.save( (error, user) => {
                                if(error) return reject(error)
                                else {
                                    return resolve({ _id: user._id, createdAt: user.createdAt, lastConnection: user.lastConnexion });
                                };
                            });
                        })
                        .catch( hashError => reject(hashError) );
                    };
                };
            });
        });
    };

/*
Export
*/
    module.exports = {
        register,
        confirmIdentity,
        login,
        setPassword
    }
//