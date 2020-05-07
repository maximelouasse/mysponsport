/*
Import
*/
    const { BrandModel } = require('../../models/index');
//

/* 
Methods CRUD
*/
    // Brand
    const createItem = (req) => {
        return new Promise( (resolve, reject) => {
            BrandModel.create(req.body)
            .then( brand => resolve({brand}) )
            .catch( err => reject(err) );
        })
    }

    const readItem = (req) => {
        return new Promise( (resolve, reject) => {
            BrandModel.find( (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }

    const readOneItem = (req) => {
        return new Promise( (resolve, reject) => {
            BrandModel.findById(req.params.id, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const updateItem = (req) => {
        return new Promise( (resolve, reject) => {
            BrandModel.findByIdAndUpdate(req.params.id, req.body, (err, document) => {
                if( err ){
                    return reject(err)
                }
                else{
                    BrandModel.findById( req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteItem = (req) => {
        return new Promise( (resolve, reject) => {
            BrandModel.deleteOne({ _id: req.params.id }, (err, document) => {
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