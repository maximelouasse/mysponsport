/*
Imports
*/
    // Angular
    import { Routes } from '@angular/router';

    // Inner
    import { AuthGuard } from "./auth.guard";
    import { CampaignPageComponent } from './routes/campaign-page/campaign-page.component';
    import { MessagePageComponent } from './routes/message-page/message-page.component';
    import { ApplicationPageComponent } from './routes/application-page/application-page.component';
    import { PropositionPageComponent } from './routes/proposition-page/proposition-page.component';
    import { HistoryPageComponent } from './routes/history-page/history-page.component';
    import { CalendarPageComponent } from './routes/calendar-page/calendar-page.component';
    import { ProfilePageComponent } from './routes/profile-page/profile-page.component';
//

/*
Export
*/
    export const MainRouter: Routes = [
      {
        path: '',
        loadChildren: () => import(`./routes/home-page/module`).then(m => m.Module)
      },
      {
        path: 'campagne',
        component: CampaignPageComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'message',
        component: MessagePageComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'candidature',
        component: ApplicationPageComponent,
        canActivate: [ AuthGuard ],
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
        canActivate: [ AuthGuard ],
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
        canActivate: [ AuthGuard ]
      },
      {
        path: 'calendrier',
        component: CalendarPageComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'profil',
        component: ProfilePageComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'inscription',
        loadChildren: () => import(`./routes/register-page/module`).then(m => m.Module)
      },
      {
        path: 'connexion',
        loadChildren: () => import(`./routes/login-page/module`).then(m => m.Module)
      }
    ];
//
