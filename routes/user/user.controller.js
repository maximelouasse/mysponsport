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
    const readUserApplication = (req) => {
        return new Promise( (resolve, reject) => {
            Models.application.find({ userId: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    // Social Network
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
        readUserApplication,
        readAllUserSocialNetwork,
        readOneUserSocialNetwork
    }
//