import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { CreateAccountPageComponent } from './Pages/create-account-page/create-account-page.component';
import { UserManualPageComponent } from './Pages/user-manual-page/user-manual-page.component';
import { AboutSmlPageComponent } from './Pages/about-sml-page/about-sml-page.component';
import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';
import { CreateNonwordSetPageComponent } from './Pages/create-nonword-set-page/create-nonword-set-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    CreateAccountPageComponent,
    UserManualPageComponent,
    AboutSmlPageComponent,
    ContactUsPageComponent,
    CreateNonwordSetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
