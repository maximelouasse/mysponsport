// Imports
const Models = require('../../models/index')

/* 
Methods CRUD
*/
    const createItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.athlete.create(req.body)
            .then( athlete => resolve({ athlete }) )
            .catch( err => reject(err) );
        })
    }

    const readItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.athlete.find( (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }

    const readOneItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.athlete.findById(req.params.id, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const updateItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate(req.params.id, req.body, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.athlete.deleteOne({ _id: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    // Sponsor
    const createSponsor = (req) => {
        return new Promise( (resolve, reject) => {
            Models.sponsor.create({ athleteId: req.params.athleteId, name: req.body.name, logo: req.body.logo })
            .then( sponsor => resolve({ sponsor }) )
            .catch( err => reject(err) );
        })
    }

    const readSponsor = (req) => {
        return new Promise( (resolve, reject) => {
            Models.sponsor.find({ athleteId: req.params.athleteId }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const readOneSponsor = (req) => {
        return new Promise( (resolve, reject) => {
            Models.sponsor.findOne({ _id: req.params.id, athleteId: req.params.athleteId }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const updateSponsor = (req) => {
        return new Promise( (resolve, reject) => {
            Models.sponsor.findByIdAndUpdate({ _id: req.params.id, athleteId: req.params.athleteId }, req.body, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.sponsor.findById( req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteSponsor = (req) => {
        return new Promise( (resolve, reject) => {
            Models.sponsor.deleteOne({ _id: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    // Award
    const createAward = (req) => {
        return new Promise( (resolve, reject) => {
            Models.award.create({ athleteId: req.params.athleteId, title: req.body.title })
            .then( award => resolve({ award }) )
            .catch( err => reject(err) );
        })
    }

    const readAward = (req) => {
        return new Promise( (resolve, reject) => {
            Models.award.find({ athleteId: req.params.athleteId }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const readOneAward = (req) => {
        return new Promise( (resolve, reject) => {
            Models.award.findOne({ _id: req.params.id, athleteId: req.params.athleteId }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const updateAward = (req) => {
        return new Promise( (resolve, reject) => {
            Models.award.findByIdAndUpdate({ _id: req.params.id, athleteId: req.params.athleteId }, req.body, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.award.findById( req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteAward = (req) => {
        return new Promise( (resolve, reject) => {
            Models.award.deleteOne({ _id: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    // Practice
    const createPractice = (req) => {
        return new Promise( (resolve, reject) => {
            Models.practice.create({ athleteId: req.body.athleteId, sportId: req.body.sportId, level: req.body.level })
            .then( practice => resolve({ practice }) )
            .catch( err => reject(err) );
        })
    }

    const readPractice = (req) => {
        return new Promise( (resolve, reject) => {
            Models.practice.find({ athleteId: req.params.athleteId }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const readOnePractice = (req) => {
        return new Promise( (resolve, reject) => {
            Models.practice.findOne({ _id: req.params.id, athleteId: req.params.athleteId }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }
    
    const updatePractice = (req) => {
        return new Promise( (resolve, reject) => {
            Models.practice.findByIdAndUpdate({ _id: req.params.id, athleteId: req.params.athleteId }, req.body, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.practice.findById( req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deletePractice = (req) => {
        return new Promise( (resolve, reject) => {
            Models.practice.deleteOne({ _id: req.params.id }, (err, document) => {
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
        deleteItem,
        createSponsor,
        readSponsor,
        readOneSponsor,
        updateSponsor,
        deleteSponsor,
        createAward,
        readAward,
        readOneAward,
        updateAward,
        deleteAward,
        createPractice,
        readPractice,
        readOnePractice,
        updatePractice,
        deletePractice
    }
//