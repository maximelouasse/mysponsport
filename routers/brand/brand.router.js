/*
Imports
*/
    // Nodes
    const express = require('express');
    const brandRouter = express.Router();

    // Modules
    const { checkFields } = require('../../services/request.checker');
    const Mandatories = require('../../services/mandatory.service');
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { createItem, readItem, readOneItem, updateItem, deleteItem } = require('./brand.controller');
//

/*
Routes definition
*/
    class BrandRouterClass {

        // Inject passport in the class
        constructor() {}

        routes() {
            // CRUD: create
            brandRouter.post('/', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.brand, req.body );
                
                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else {
                    //=> Request is valid: use controller
                    createItem(req)
                        .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                        .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                };
            })

            // CRUD: read
            brandRouter.get('/', (req, res) => {
                //=> Request is valid: use controller
                readItem()
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // CRUD: read one
            brandRouter.get('/:id', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readOneItem(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // CRUD: update
            brandRouter.put('/:id', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.brand, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else {
                    //=> Request is valid: use controller
                    updateItem(req)
                        .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                        .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                };
            })

            // CRUD: delete
            brandRouter.delete('/:id', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                deleteItem(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })
        }

        init() {
            // Get route fonctions
            this.routes();

            // Sendback router
            return brandRouter;
        }
    }
//

/*
Export
*/
    module.exports = BrandRouterClass;
//