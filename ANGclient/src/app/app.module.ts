/*
  Imports
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { HttpClientModule } from "@angular/common/http";
  import { FormsModule, ReactiveFormsModule } from "@angular/forms";
  import { RouterModule } from "@angular/router"

  // Inner components
  import { AuthService } from "./services/auth/auth.service";
  import { AppComponent } from './app.component';
  import { MainRouter } from './app.router';
  import { HeaderComponent } from './shared/header/header.component';
  import { CampaignPageComponent } from './routes/campaign-page/campaign-page.component';
  import { ApplicationPageComponent } from './routes/application-page/application-page.component';
  import { MessagePageComponent } from './routes/message-page/message-page.component';
  import { PropositionPageComponent } from './routes/proposition-page/proposition-page.component';
  import { HistoryPageComponent } from './routes/history-page/history-page.component';
  import { CalendarPageComponent } from './routes/calendar-page/calendar-page.component';
  import { RegisterPageComponent } from './routes/register-page/register-page.component';

  import { ProfilePageComponent } from './routes/profile-page/profile-page.component';
  import { LoginPageComponent } from './routes/login-page/login-page.component';
  import { SidebarComponent } from './shared/sidebar/sidebar.component';

  @NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      CampaignPageComponent,
      ApplicationPageComponent,
      MessagePageComponent,
      PropositionPageComponent,
      HistoryPageComponent,
      CalendarPageComponent,
      ProfilePageComponent,
      RegisterPageComponent,
      LoginPageComponent,
      SidebarComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot( MainRouter, { onSameUrlNavigation: 'reload' } )
    ],
    providers: [ AuthService ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule { }
