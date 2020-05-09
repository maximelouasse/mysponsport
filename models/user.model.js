//IMPORT
    const mongoose = require('mongoose')
    const jwt = require('jsonwebtoken');
//

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: false,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, "is invalid"],
        index: true
    },
    password: {
        type: String,
        required: [true, "can't be blank"]
    },
    role: {
        type: String,
        enum: ["athlete", "brand"],
        required: [true, "can't be blank"]
    },
    social_network: {
        type: [{
            type: {
                type: String,
                enum: ["facebook", "instagram", "linkedin"],
                required: [true, "can't be blank"]
            },
            url: {
                type: String,
                required: ['true', "can't be blank"]
            }
        }]
    },
    application: {
        type: [{
            offerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Offer',
                required: [true, "can't be blank"]
            },
            valide: {
                type: Boolean,
                default: false
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            dateValide: {
                type: Date
            }
        }]
    },
    lastConnexion: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isValidated: {
        type: Boolean
    }
});

//METHODE
    UserSchema.methods.generateJwt = idUser =>{
        // The access token expired in 60 days
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 59);

        /**
         * JWT sign() method
         * @param object => all the data nedded for the access token
         * @param JWT_SECRET => secure key to hash the access token (cf. '.env')
         * @return => hashed user access token
        */
            return jwt.sign({
                _id: idUser,
                isValidated: this.password,
                creationDate: this.creationDate,
                lastConnection: this.lastConnection,
                expireIn: '10s',
                exp: parseInt(expiry.getTime() / 100, 10)
            }, process.env.JWT_SECRET );
        //
    }

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;