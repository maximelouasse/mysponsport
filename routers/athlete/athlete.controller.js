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
        var athlteId = req.params.id,
            name = req.body.name,
            logo = req.body.logo;
            
        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate({ _id: athlteId }, { $push: { sponsor: { name: name, logo: logo} } }, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( athlteId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const readSponsor = (req) => {
        return new Promise( (resolve, reject) => {
            Models.athlete.findById({ _id: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document.sponsor);
            })
        })
    }

    const readOneSponsor = (req) => {
        return new Promise( (resolve, reject) => {
            Models.athlete.findById({ _id: req.params.id }, (err, document) => {
                if(err) {
                    reject(err);
                } else {
                    document.sponsor.forEach(element => {
                        if(element._id == req.params.sponsorId) {
                            resolve(element);
                        }
                    });
                }
            })
        })
    }
    
    const updateSponsor = (req) => {
        var athleteId = req.params.id,
            sponsorId = req.params.sponsorId,
            name = req.body.name
            logo = req.body.logo;

        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate({ _id: athleteId }, { $set: { sponsor: { _id: sponsorId, name: name, logo: logo } } }, (err, collection) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( athleteId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteSponsor = (req) => {
        var athleteId = req.params.id,
            sponsorId = req.params.sponsorId;

        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate({ _id: athleteId }, { $pull: { sponsor: { _id: sponsorId } } }, (err, collection) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( athleteId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    // Award
    const createAward = (req) => {
        var athlteId = req.params.id,
            title = req.body.title;
            
        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate({ _id: athlteId }, { $push: { award: { title: title } } }, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( athlteId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const readAward = (req) => {
        return new Promise( (resolve, reject) => {
            Models.athlete.findById({ _id: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document.award);
            })
        })
    }

    const readOneAward = (req) => {
        return new Promise( (resolve, reject) => {
            Models.athlete.findById({ _id: req.params.id }, (err, document) => {
                if(err) {
                    reject(err);
                } else {
                    document.award.forEach(element => {
                        if(element._id == req.params.awardId) {
                            resolve(element);
                        }
                    });
                }
            })
        })
    }
    
    const updateAward = (req) => {
        var athleteId = req.params.id,
            awardId = req.params.awardId,
            title = req.body.title;

        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate({ _id: athleteId }, { $set: { award: { _id: awardId, title: title } } }, (err, collection) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( athleteId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteAward = (req) => {
        var athleteId = req.params.id,
            awardId = req.params.awardId;

        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate({ _id: athleteId }, { $pull: { award: { _id: awardId } } }, (err, collection) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( athleteId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    // Practice
    const createPractice = (req) => {
        var athlteId = req.params.id,
            sportId = req.body.sportId,
            level = req.body.level;
            
        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate({ _id: athlteId }, { $push: { practice: { sportId: sportId, level: level} } }, (err, document) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( athlteId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const readPractice = (req) => {
        return new Promise( (resolve, reject) => {
            Models.practice.find({ athlteId: req.params.athlteId }, (err, document) => {
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
        var athleteId = req.params.id,
            practiceId = req.params.practiceId
            level = req.body.level
            sportId = req.body.sportId;

        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate({ _id: athleteId }, { $set: { practice: { _id: practiceId, level: level, sportId: sportId } } }, (err, collection) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( athleteId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deletePractice = (req) => {
        var athleteId = req.params.id,
            practiceId = req.params.practiceId;

        return new Promise( (resolve, reject) => {
            Models.athlete.findByIdAndUpdate({ _id: athleteId }, { $pull: { practice: { _id: practiceId } } }, (err, collection) => {
                if( err ) {
                    return reject(err)
                } else {
                    Models.athlete.findById( athleteId, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
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