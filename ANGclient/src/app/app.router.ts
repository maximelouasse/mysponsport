/*
Imports
*/
    // Angular
    import { Routes } from '@angular/router';

    // Inner
    import { HomePageComponent } from "./routes/home-page/home-page.component";
    import { ConnectedPageComponent } from "./routes/connected-page/connected-page.component";
    import { AuthGuard } from "./auth.guard";
    import { CampaignPageComponent } from './routes/campaign-page/campaign-page.component';
    import { MessagePageComponent } from './routes/message-page/message-page.component';
    import { ApplicationPageComponent } from './routes/application-page/application-page.component';
    import { PropositionPageComponent } from './routes/proposition-page/proposition-page.component';
    import { HistoryPageComponent } from './routes/history-page/history-page.component';
    import { CalendarPageComponent } from './routes/calendar-page/calendar-page.component';
    import { ProfilePageComponent } from './routes/profile-page/profile-page.component';
    import { RegisterPageComponent } from './routes/register-page/register-page.component';
    import { LoginPageComponent } from './routes/login-page/login-page.component';
//

/*
Export
*/
    export const AppRouterModule: Routes = [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'connected',
        component: ConnectedPageComponent,
        //canActivate: [ AuthGuard ]
      },
      {
        path: 'campagne',
        component: CampaignPageComponent,
        //canActivate: [ AuthGuard ]
      },
      {
        path: 'message',
        component: MessagePageComponent,
        //canActivate: [ AuthGuard ]
      },
      {
        path: 'candidature',
        component: ApplicationPageComponent,
        //canActivate: [ AuthGuard ],
        children: [
          {
            path: 'candidature/:id',
            component: ApplicationPageComponent
          }
        ]
      },
      {
        path: 'proposition',
        component: PropositionPageComponent,
        //canActivate: [ AuthGuard ],
        children: [
          {
            path: 'proposition/:id',
            component: PropositionPageComponent
          }
        ]
      },
      {
        path: 'historique',
        component: HistoryPageComponent,
        //canActivate: [ AuthGuard ]
      },
      {
        path: 'calendrier',
        component: CalendarPageComponent,
        //canActivate: [ AuthGuard ]
      },
      {
        path: 'profil',
        component: ProfilePageComponent,
        //canActivate: [ AuthGuard ]
      },
      {
        path: 'inscription',
        component: RegisterPageComponent
      },
      {
        path: 'connexion',
        component: LoginPageComponent
      }
    ];
//
