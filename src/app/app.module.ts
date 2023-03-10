import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { PetIndexComponent } from './views/pet-index/pet-index.component';
import { PetListComponent } from './cmps/pet-list/pet-list.component';
import { PetPreviewComponent } from './cmps/pet-preview/pet-preview.component';
import { PetFilterComponent } from './cmps/pet-filter/pet-filter.component';
import { PetDetailsComponent } from './views/pet-details/pet-details.component';
import { PetEditComponent } from './cmps/pet-edit/pet-edit.component';
import { ScreenComponent } from './cmps/screen/screen.component';
import { LoginSignupComponent } from './views/login-signup/login-signup.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { LoginComponent } from './cmps/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    PetIndexComponent,
    PetListComponent,
    PetPreviewComponent,
    PetFilterComponent,
    PetDetailsComponent,
    PetEditComponent,
    ScreenComponent,
    LoginSignupComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
