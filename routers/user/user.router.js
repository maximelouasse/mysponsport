/*
Imports
*/
    // Nodes
    const express = require('express');
    const userRouter = express.Router();

    // Inner
    const { checkFields } = require('../../services/request.checker');
    const Mandatories = require('../../services/mandatory.service');
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { createItem, readItem, readOneItem, updateItem, deleteItem, readUserBrand, readUserOffer, createMessage, readUserMessages, readConversationMessages, createApplication, readApplication, readOneApplication, updateApplication, deleteApplication, createSocialNetwork, updateSocialNetwork, deleteSocialNetwork, readAllUserSocialNetwork, readOneUserSocialNetwork } = require('./user.controller');
//

/*
Routes definition
*/
    class UserRouterClass {

        // Inject passport in the class
        constructor() {}

        routes() {
            // CRUD: create
            userRouter.post('/', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.user, req.body );

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
            userRouter.get('/', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                //=> Request is valid: use controller
                readItem(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // CRUD: read one
            userRouter.get('/:id', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                //=> Request is valid: use controller
                readOneItem(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // CRUD: update
            userRouter.put('/:id', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.user, req.body );

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
            userRouter.delete('/:id', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                deleteItem(req.body)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // Get brand user
            userRouter.get('/:id/brand', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readUserBrand(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // Get offer user
            userRouter.get('/:id/offer', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readUserOffer(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // Create message
            userRouter.post('/:id/message', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.message, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else {
                    //=> Request is valid: use controller
                    createMessage(req)
                        .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                        .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                };
            })

            // Get distinct receiverId message by user
            userRouter.get('/:id/message', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readUserMessages(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // Create User Application
            userRouter.post('/:id/application', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                
                //=> Request is valid: use controller
                createApplication(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // Get All User Application
            userRouter.get('/:id/application', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readApplication(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // Get One User Application
            userRouter.get('/:id/application/:applicationId', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readOneApplication(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // Update / Delete User Application
            userRouter.put('/:id/application/:applicationId', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                if(req.body.action === 'update') {
                    //=> Request is valid: use controller
                    updateApplication(req)
                        .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                        .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                } else if(req.body.action === 'delete') {
                    //=> Request is valid: use controller
                    deleteApplication(req)
                        .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                        .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                }
            })

            // Get all messages by authorId / receiverId
            userRouter.get('/:id/message/:receiverId', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readConversationMessages(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })
            
            // Create User Social
            userRouter.post('/:id/social', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                createSocialNetwork(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // Update / Delete User Social Network
            userRouter.put('/:id/social/:socialId', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                if(req.body.action === 'update') {
                    //=> Request is valid: use controller
                    updateSocialNetwork(req)
                        .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                        .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                } else if(req.body.action === 'delete') {
                    //=> Request is valid: use controller
                    deleteSocialNetwork(req)
                        .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                        .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                }
            })

            // Get All User Social Network
            userRouter.get('/:id/social', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readAllUserSocialNetwork(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })

            // Get One User Social Network
            userRouter.get('/:userId/social/:id', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                readOneUserSocialNetwork(req)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            })
        }

        init() {
            // Get route fonctions
            this.routes();

            // Sendback router
            return userRouter;
        }
    }
//

/*
Export
*/
    module.exports = UserRouterClass;
//