import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {provideHttpClient} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {MatCard, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ModalComponent } from './components/modal/modal.component';
import {MatButton} from "@angular/material/button";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import { StringTruncatePipe } from './pipes/string-truncate.pipe';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UsersPageComponent,
    NavbarComponent,
    ProductItemComponent,
    ModalComponent,
    StringTruncatePipe,
    UserCardComponent,
    FormModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCard,
    MatCardHeader,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButton,
    MatProgressSpinner,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
