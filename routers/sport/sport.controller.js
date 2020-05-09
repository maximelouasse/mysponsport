/*
Import
*/
    const { SportModel } = require('../../models/index');
//

/* 
Methods CRUD
*/
    // Sport
    const createItem = (req) => {
        return new Promise( (resolve, reject) => {
            SportModel.create(req.body)
            .then( sport => resolve({sport}) )
            .catch( err => reject(err) );
        })
    }

    const readItem = (req) => {
        return new Promise( (resolve, reject) => {
            SportModel.find( (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }

    const readOneItem = (req) => {
        return new Promise( (resolve, reject) => {
            SportModel.findById(req.params.id, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const updateItem = (req) => {
        return new Promise( (resolve, reject) => {
            SportModel.findByIdAndUpdate(req.params.id, req.body, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    SportModel.findById( req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteItem = (req) => {
        return new Promise( (resolve, reject) => {
            SportModel.deleteOne({ _id: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document);
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
        deleteItem
    }
//