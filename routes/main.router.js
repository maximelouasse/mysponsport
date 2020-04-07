/*
Imports
*/
    // NodeJS
    const { Router } = require('express');

    // Routers
    const AthleteRouterClass = require('./athlete/athlete.router');
    const BrandRouterClass = require('./brand/brand.router');
    const OfferRouterClass = require('./offer/offer.router');
    const SportRouterClass = require('./sport/sport.router');
    const UserRouterClass = require('./user/user.router');
    const SocialRouterClass = require('./social/social.router');
    const ApplciationRouterClass = require('./application/application.router');
//

/*
Define routers
*/
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();
    mainRouter.use('/api', apiRouter);

    // Child    
    const athleteRouter = new AthleteRouterClass();
    const brandRouter = new BrandRouterClass();
    const offerRouter = new OfferRouterClass();
    const sportRouter = new SportRouterClass();
    const userRouter = new UserRouterClass();
    const SocialRouter = new SocialRouterClass();
    const ApplciationRouter = new ApplciationRouterClass();
//

/*
Configure routes
*/
    // Set API router
    apiRouter.use('/athlete', athleteRouter.init());
    apiRouter.use('/brand', brandRouter.init());
    apiRouter.use('/offer', offerRouter.init());
    apiRouter.use('/sport', sportRouter.init());
    apiRouter.use('/user', userRouter.init());
    apiRouter.use('/social', SocialRouter.init());
    apiRouter.use('/application', ApplciationRouter.init());
    
    // Set front router
    //mainRouter.use('/', frontRouter.init());
//

/*
Export
*/
    module.exports = { mainRouter };
//