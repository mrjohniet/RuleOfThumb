import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FeaturedCharacterComponent } from './home/featured-character/featured-character.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PastTrialsComponent } from './past-trials/past-trials.component';
import { VotingComponent } from './home/voting/voting.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedCharacterComponent,
    PastTrialsComponent,
    VotingComponent,
    HowItWorksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
