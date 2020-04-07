/* 
Definition
*/
    const Mandatories = {
        user: ['email', 'password', 'last_connexion', 'role'],
        brand: ['name', 'logo', 'description', 'date_creation', 'userId'],
        offer: ['name', 'description', 'budget', 'start_date', 'end_date', 'picture', 'gender', 'range_age', 'location', 'userId'],
        athlete: ['first_name', 'last_name', 'profil_picture', 'professional_email', 'gender', 'country', 'city', 'zipcode', 'birthday_date', 'userId'],
        sponsor: ['name', 'logo'],
        award: ['title'],
        sport: ['name'],
        practice: ['athleteId', 'sportId', 'level'],
        message: ['authorId', 'receiverId', 'content', 'date_creation'],
        social: ['type', 'url', 'userId'],
        application: ['userId', 'offerId', 'valide']
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//