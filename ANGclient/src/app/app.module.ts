import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Router
import { RouterModule } from "@angular/router"
import { AppRouterModule } from "./app.router";

// Services
import { CrudService } from "./services/crud/crud.service";

import { AppComponent } from './app.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { ConnectedPageComponent } from './routes/connected-page/connected-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormLoginComponent } from './shared/form-login/form-login.component';
import { ItemPostComponent } from './shared/item-post/item-post.component';
import { CampaignPageComponent } from './routes/campaign-page/campaign-page.component';
import { ApplicationPageComponent } from './routes/application-page/application-page.component';
import { MessagePageComponent } from './routes/message-page/message-page.component';
import { PropositionPageComponent } from './routes/proposition-page/proposition-page.component';
import { HistoryPageComponent } from './routes/history-page/history-page.component';
import { CalendarPageComponent } from './routes/calendar-page/calendar-page.component';
import { ProfilePageComponent } from './routes/profile-page/profile-page.component';
import { RegisterPageComponent } from './routes/register-page/register-page.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConnectedPageComponent,
    HeaderComponent,
    FormLoginComponent,
    ItemPostComponent,
    CampaignPageComponent,
    ApplicationPageComponent,
    MessagePageComponent,
    PropositionPageComponent,
    HistoryPageComponent,
    CalendarPageComponent,
    ProfilePageComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } )
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
