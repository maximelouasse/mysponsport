/* 
Definition
*/
    const Mandatories = {
        user: ['email', 'password', 'lastConnexion', 'role'],
        register: ['email', 'password', 'role', 'first_name', 'last_name', 'gender', 'country', 'city', 'zipcode', 'birthday_date'],
        login: ['email', 'password'],
        brand: ['name', 'logo', 'description', 'date_creation', 'userId'],
        offer: ['name', 'description', 'budget', 'start_date', 'end_date', 'picture', 'gender', 'range_age', 'location', 'userId'],
        athlete: ['first_name', 'last_name', 'gender', 'country', 'city', 'zipcode', 'birthday_date'],
        sport: ['name'],
        message: ['authorId', 'receiverId', 'content', 'date_creation']
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//