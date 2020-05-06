/*
Imports
*/
    // Nodes
    const express = require('express');
    const myRouter = express.Router();

    // Modules
    const { checkFields } = require('../../services/request.checker');
    const Mandatories = require('../../services/mandatory.service');
    const { createItem, readItem, readOneItem, updateItem, deleteItem, createSponsor, readSponsor, readOneSponsor, updateSponsor, deleteSponsor, createAward, readAward, readOneAward, updateAward, deleteAward, createPractice, readPractice, readOnePractice, updatePractice, deletePractice } = require('./athlete.controller');
//

/*
Routes definition
*/
    class MyRouterClass {

        // Inject passport in the class
        constructor() {}

        routes() {
            // CRUD: create
            myRouter.post('/', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.status(400).json({
                        message: 'No body provided',
                        data: null,
                        err: null
                    })
                }

                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.athlete, req.body );

                if(!ok) {
                    return res.status(400).json({
                        message: 'Bad fields provided',
                        data: null,
                        err: {miss, extra}
                    })
                } else {
                    createItem(req)
                    .then( apiResponse => {
                        return res.status(201).json({
                            message: 'Data created',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Data not created',
                            data: null,
                            err: apiResponse
                        })
                    })
                }
            })

            // CRUD: read
            myRouter.get('/', (req, res) => {
                readItem()
                .then( apiResponse => {
                    return res.status(200).json({
                        message: 'Data sended',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sended',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // CRUD: read one
            myRouter.get('/:id', (req, res) => {
                readOneItem(req)
                .then( apiResponse => {
                    return res.status(200).json({
                        message: 'Data sended',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sended',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // CRUD: update
            myRouter.put('/:id', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.status(400).json({
                        message: 'No body provided',
                        data: null,
                        err: null
                    })
                }

                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.athlete, req.body );

                if(!ok) {
                    return res.status(400).json({
                        message: 'Bad fields provided',
                        data: null,
                        err: {miss, extra}
                    })
                } else {
                    updateItem(req)
                    .then( apiResponse => {
                        return res.status(201).json({
                            message: 'Data updated',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Data not updated',
                            data: null,
                            err: apiResponse
                        })
                    })
                }
            })

            // CRUD: delete
            myRouter.delete('/:id', (req, res) => {
                deleteItem(req)
                .then( apiResponse => {
                    return res.status(200).json({
                        message: 'Data deleted',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not deleted',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // Create sponsor
            myRouter.post('/:id/sponsor', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.status(400).json({
                        message: 'No body provided',
                        data: null,
                        err: null
                    })
                }

                createSponsor(req)
                .then( apiResponse => {
                    return res.status(201).json({
                        message: 'Data created',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not created',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // Update / Delete User Sponsor
            myRouter.put('/:id/sponsor/:sponsorId', (req, res) => {
                if(req.body.action === 'update') {
                    updateSponsor(req)
                    .then( apiResponse => {
                        return res.status(200).json({
                            message: 'Data updated',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Data not updated',
                            data: null,
                            err: apiResponse
                        })
                    })
                } else if(req.body.action === 'delete') {
                    deleteSponsor(req)
                    .then( apiResponse => {
                        return res.status(200).json({
                            message: 'Data updated',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Data not updated',
                            data: null,
                            err: apiResponse
                        })
                    })
                }
            })

            // Read sponsors
            myRouter.get('/:id/sponsor', (req, res) => {
                readSponsor(req)
                .then( apiResponse => {
                    return res.status(200).json({
                        message: 'Data sended',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sended',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // Read one sponsor
            myRouter.get('/:id/sponsor/:sponsorId', (req, res) => {
                readOneSponsor(req)
                .then( apiResponse => {
                    return res.status(200).json({
                        message: 'Data sended',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sended',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // Create award
            myRouter.post('/:id/award', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.status(400).json({
                        message: 'No body provided',
                        data: null,
                        err: null
                    })
                }

                createAward(req)
                .then( apiResponse => {
                    return res.status(201).json({
                        message: 'Data created',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not created',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // Update / Delete User Award
            myRouter.put('/:id/award/:awardId', (req, res) => {
                if(req.body.action === 'update') {
                    updateAward(req)
                    .then( apiResponse => {
                        return res.status(200).json({
                            message: 'Data updated',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Data not updated',
                            data: null,
                            err: apiResponse
                        })
                    })
                } else if(req.body.action === 'delete') {
                    deleteAward(req)
                    .then( apiResponse => {
                        return res.status(200).json({
                            message: 'Data updated',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Data not updated',
                            data: null,
                            err: apiResponse
                        })
                    })
                }
            })

            // Read awards
            myRouter.get('/:id/award', (req, res) => {
                readAward(req)
                .then( apiResponse => {
                    return res.status(200).json({
                        message: 'Data sended',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sended',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // Read one award
            myRouter.get('/:id/award/:awardId', (req, res) => {
                readOneAward(req)
                .then( apiResponse => {
                    return res.status(200).json({
                        message: 'Data sended',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sended',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // Create practice
            myRouter.post('/:id/practice', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.status(400).json({
                        message: 'No body provided',
                        data: null,
                        err: null
                    })
                }

                createPractice(req)
                .then( apiResponse => {
                    return res.status(201).json({
                        message: 'Data created',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not created',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // Update / Delete User Practice
            myRouter.put('/:id/practice/:practiceId', (req, res) => {
                if(req.body.action === 'update') {
                    updatePractice(req)
                    .then( apiResponse => {
                        return res.status(200).json({
                            message: 'Data updated',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Data not updated',
                            data: null,
                            err: apiResponse
                        })
                    })
                } else if(req.body.action === 'delete') {
                    deletePractice(req)
                    .then( apiResponse => {
                        return res.status(200).json({
                            message: 'Data updated',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Data not updated',
                            data: null,
                            err: apiResponse
                        })
                    })
                }
            })

            // Read practices
            myRouter.get('/:athleteId/practice', (req, res) => {
                readPractice(req)
                .then( apiResponse => {
                    return res.status(200).json({
                        message: 'Data sended',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sended',
                        data: null,
                        err: apiResponse
                    })
                })
            })

            // Read one practice
            myRouter.get('/:athleteId/practice/:id', (req, res) => {
                readOnePractice(req)
                .then( apiResponse => {
                    return res.status(200).json({
                        message: 'Data sended',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sended',
                        data: null,
                        err: apiResponse
                    })
                })
            })
        }

        init() {
            // Get route fonctions
            this.routes();

            // Sendback router
            return myRouter;
        }
    }
//

/*
Export
*/
    module.exports = MyRouterClass;
//