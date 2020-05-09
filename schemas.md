# MySponsport

## Schema

<https://mongoosejs.com/docs/schematypes.html>
<https://mongoosejs.com/docs/guide.html>
<https://mongoosejs.com/docs/validation.html>
<https://mongoosejs.com/docs/models.html>
<https://mongoosejs.com/docs/2.7.x/docs/schematypes.html>
<https://thinkster.io/tutorials/node-json-api/creating-the-user-model>
<https://thinkster.io/tutorials/mean-stack/creating-schemas-with-mongoose>
<https://stackoverflow.com/questions/47134609/how-to-store-url-value-in-mongoose-schema/53862535>

### Users

```sh
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
lastConnexion: {
    type: Date
},
role: {
    type: String,
    enum: ["athlete", "brand"],
    required: [true, "can't be blank"]
},
social_network: {
    type: [{
        name: {
            type: String,
            required: ['true', "can't be blank"]
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
        }
    }]
}
```

### Brands

```sh
name: {
    type: String,
    required: [true, "can't be blank"]
},
logo: {
    type: String,
    required: [true, "can't be blank"]
},
description: {
    type: String,
    required: [true, "can't be blank"]
},
date_creation: {
    type: Date
},
_userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "can't be blank"]
}
```

### Athletes

```sh
first_name: {
    type: String,
    required: [true, "can't be blank"],
    minlength: 3
},
last_name: {
    type: String,
    required: [true, "can't be blank"],
    minlength: 3
},
profil_picture: {
    type: String,
    required: [true, "can't be blank"]
},
professional_email: {
    type: String,
    trim: false,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
},
gender: {
    type: String,
    enum: ["Male", "Female", "None"],
    required: [true, "can't be blank"]
},
country: {
    type: String,
    required: [true, "can't be blank"]
},
city: {
    type: String,
    required: [true, "can't be blank"]
},
zipcode: {
    type: String,
    required: [true, "can't be blank"]
},
birthday_date: {
    type: Date,
    required: [true, "can't be blank"]
},
_userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "can't be blank"]
},
practice: {
    type: [{
        sportId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sport',
            required: [true, "can't be blank"]
        },
        level: {
            type: String,
            enum: ["Débutant", "Amateur", "Semi-Pro", "Pro"],
            required: [true, "can't be blank"]
        }
    }]
},
award: {
    type: [{
        title: {
            type: String,
            required: [true, "can't be blank"]
        },
        date: {
            type: Date,
            required: [true, "can't be blank"]
        }
    }]
},
sponsor: {
    type: [{
        name: {
            type: String,
            required: [true, "can't be blank"]
        },
        logo: {
            type: String
        }
    }]
}
```

### Sports

```sh
name: {
    type: String,
    required: [true, "can't be blank"]
}
```

### Messages

```sh
content: {
    type: String,
    required: [true, "can't be blank"]
},
date_creation: {
    type: Date,
    required: [true, "can't be blank"]
},
_authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "can't be blank"]
},
_receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "can't be blank"]
}
```

### Offers

```sh
name: {
    type: String,
    required: [true, "can't be blank"]
},
description: {
    type: String,
    required: [true, "can't be blank"]
},
budget: {
    type: String,
    required: [true, "can't be blank"]
},
start_date: {
    type: Date,
    required: [true, "can't be blank"]
},
end_date: {
    type: Date,
    required: [true, "can't be blank"]
},
picture: {
    type: String,
    required: [true, "can't be blank"]
},
gender: {
    type: String,
    enum: ["Male", "Female", "None"]
},
range_age: {
    type: ["min": Number, "max": Number]
},
location: {
    type: String
},
_userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "can't be blank"]
}
```
