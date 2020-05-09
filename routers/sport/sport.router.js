/*
Imports
*/
    // Nodes
    const express = require('express');
    const sportRouter = express.Router();

    // Modules
    const { checkFields } = require('../../services/request.checker');
    const Mandatories = require('../../services/mandatory.service');
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { createItem, readItem, readOneItem, updateItem, deleteItem } = require('./sport.controller');
//

/*
Routes definition
*/
    class SportRouterClass {

        // Inject passport in the class
        constructor() {}

        routes() {
            // CRUD: create
            sportRouter.post('/', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.sport, req.body );
                
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
            sportRouter.get('/', (req, res) => {
                //=> Request is valid: use controller
                readItem()
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // CRUD: read one
            sportRouter.get('/:id', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readOneItem(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // CRUD: update
            sportRouter.put('/:id', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.sport, req.body );

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
            sportRouter.delete('/:id', (req, res) => {
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
            return sportRouter;
        }
    }
//

/*
Export
*/
    module.exports = SportRouterClass;
//