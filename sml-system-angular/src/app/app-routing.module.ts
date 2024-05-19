import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { UserManualPageComponent } from './Pages/user-manual-page/user-manual-page.component';
import { CreateNonwordSetPageComponent } from './Pages/create-nonword-set-page/create-nonword-set-page.component';
import { AboutSmlPageComponent } from './Pages/about-sml-page/about-sml-page.component';
import { CreateAccountPageComponent } from './Pages/create-account-page/create-account-page.component';
import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'create-account', component: CreateAccountPageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'about-sml', component: AboutSmlPageComponent },
  { path: 'create-nonword-set', component: CreateNonwordSetPageComponent },
  { path: 'user-manual', component: UserManualPageComponent },
  { path: 'contact-us', component: ContactUsPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
