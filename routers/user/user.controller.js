// Imports
const Models = require('../../models/index')

/* 
Methods CRUD
*/
    // User
    const createItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.user.create(req.body)
            .then( user => resolve({user}) )
            .catch( err => reject(err) );
        })
    }

    const readItem = (req) => {
        if(req.query.email != null && req.query.email != "") {
            return new Promise( (resolve, reject) => {
                Models.user.find( { email: req.query.email }, (err, collection) => {
                    if( err ) {
                        return reject(err)
                    } else if(collection.length > 0) {
                        Models.athlete.find( { userId: collection[0].id }, (err, collection) => {
                            err ? reject(err) : resolve(collection);
                        }).populate('user');
                    } else {
                        resolve(collection);
                    }
                })
            })
        }

        return new Promise( (resolve, reject) => {
            Models.user.find( (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }

    const readOneItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.user.findById(req.params.id, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const updateItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.user.findByIdAndUpdate(req.params.id, req.body, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.user.findById( req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.user.deleteOne({ _id: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    // Brand
    const readUserBrand = (req) => {
        return new Promise( (resolve, reject) => {
            Models.brand.findOne({ userId: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    // Offer
    const readUserOffer = (req) => {
        return new Promise( (resolve, reject) => {
            Models.offer.find({ userId: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    // Message
    const createMessage = (req) => {
        return new Promise( (resolve, reject) => {
            Models.message.create(req.body)
            .then( user => resolve({user}) )
            .catch( err => reject(err) );
        })
    }

    const readUserMessages = (req) => {
        return new Promise( (resolve, reject) => {
            Models.message.find().distinct('receiverId', (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
            /*Models.message.find({ userId: req.params.id }, (err, collection) => {
                err ? reject(err) : resolve(collection);
            })*/
        })
    }
    
    const readConversationMessages = (req) => {
        return new Promise( (resolve, reject) => {
            Models.message.find({ authorId: req.params.id, receiverId: req.params.receiverId }, (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }

    // Application
    const createApplication = (req) => {
        var userId = req.params.id,
            offerId = req.body.offerId;
            
        return new Promise( (resolve, reject) => {
            Models.user.findByIdAndUpdate({ _id: userId }, { $push: { application: { offerId: offerId } } }, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.user.findById( userId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const readApplication = (req) => {
        return new Promise( (resolve, reject) => {
            Models.user.findById({ _id: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document.application);
            })
        })
    }

    const readOneApplication = (req) => {
        return new Promise( (resolve, reject) => {
            Models.user.findById({ _id: req.params.id }, (err, document) => {
                if(err) {
                    reject(err);
                } else {
                    document.application.forEach(element => {
                        if(element._id == req.params.applicationId) {
                            resolve(element);
                        }
                    });
                }
            })
        })
    }

    // Social Network
    const createSocialNetwork = (req) => {
        var userId = req.params.id,
            type = req.body.type,
            url = req.body.url;
            
        return new Promise( (resolve, reject) => {
            Models.user.findByIdAndUpdate({ _id: userId }, { $push: { social_network: { type: type, url: url} } }, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.user.findById( userId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const updateSocialNetwork = (req) => {
        var userId = req.params.id,
            socialId = req.params.socialId
            type = req.body.type,
            url = req.body.url;

        return new Promise( (resolve, reject) => {
            Models.user.findByIdAndUpdate({ _id: userId }, { $set: { social_network: { _id: socialId, type: type, url: url } } }, (err, collection) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.user.findById( userId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteSocialNetwork = (req) => {
        var userId = req.params.id,
            socialId = req.params.socialId;

        return new Promise( (resolve, reject) => {
            Models.user.findByIdAndUpdate({ _id: userId }, { $pull: { social_network: { _id: socialId } } }, (err, collection) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.user.findById( userId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const readAllUserSocialNetwork = (req) => {
        return new Promise( (resolve, reject) => {
            Models.social.find({ userId: req.params.id }, (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }

    const readOneUserSocialNetwork = (req) => {
        return new Promise( (resolve, reject) => {
            Models.social.find({ _id: req.params.id }, (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }
//

/*
Export
*/
    module.exports = {
        createItem,
        readItem,
        readOneItem,
        updateItem,
        deleteItem,
        readUserBrand,
        readUserOffer,
        createMessage,
        readUserMessages,
        readConversationMessages,
        createApplication,
        readApplication,
        readOneApplication,
        createSocialNetwork,
        updateSocialNetwork,
        deleteSocialNetwork,
        readAllUserSocialNetwork,
        readOneUserSocialNetwork
    }
//