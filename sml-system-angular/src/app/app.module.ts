import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { CreateAccountPageComponent } from './Pages/create-account-page/create-account-page.component';
import { UserManualPageComponent } from './Pages/user-manual-page/user-manual-page.component';
import { AboutSmlPageComponent } from './Pages/about-sml-page/about-sml-page.component';
import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { CreateNonwordsetPageComponent } from './Pages/create-nonwordset-page/create-nonwordset-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CreateAccountPageComponent,
    UserManualPageComponent,
    AboutSmlPageComponent,
    ContactUsPageComponent,
    HomepageComponent,
    CreateNonwordsetPageComponent,
    ToolbarComponent,
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatRadioModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
