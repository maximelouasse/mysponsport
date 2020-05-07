/*
Imports
*/
    // NodeJS
    const { Router } = require('express');
    const passport = require('passport');

    // Authentication
    const { setAuthentication } = require('../services/auth.service');
    setAuthentication(passport);

    // Routers
    const AuthRouterClass = require('./auth/auth.router');
    const AthleteRouterClass = require('./athlete/athlete.router');
    const BrandRouterClass = require('./brand/brand.router');
    const OfferRouterClass = require('./offer/offer.router');
    const SportRouterClass = require('./sport/sport.router');
    const UserRouterClass = require('./user/user.router');
    const SocialRouterClass = require('./social/social.router');
//

/*
Define routers
*/
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();
    mainRouter.use('/', apiRouter);

    // Child
    const authRouter = new AuthRouterClass({ passport });
    const athleteRouter = new AthleteRouterClass();
    const brandRouter = new BrandRouterClass();
    const offerRouter = new OfferRouterClass();
    const sportRouter = new SportRouterClass();
    const userRouter = new UserRouterClass();
    const SocialRouter = new SocialRouterClass();
//

/*
Configure routes
*/
    // Set API router
    apiRouter.use('/auth', authRouter.init());
    apiRouter.use('/athlete', athleteRouter.init());
    apiRouter.use('/brand', brandRouter.init());
    apiRouter.use('/offer', offerRouter.init());
    apiRouter.use('/sport', sportRouter.init());
    apiRouter.use('/user', userRouter.init());
    apiRouter.use('/social', SocialRouter.init());
//

/*
Export
*/
    module.exports = { mainRouter };
//