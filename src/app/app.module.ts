import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { WishlistComponent } from './dashboard/wishlist/wishlist.component';
import { WishlistCreateComponent } from './dashboard/wishlist/wishlist-create/wishlist-create.component';
import { DetailComponent } from './dashboard/wishlist/detail/detail.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ConfigService} from './config/config.service';
import {NaturalPersonService} from './model/natural-person/natural-person.service';
import {BusinessService} from './model/business/business.service';
import {PurchaseService} from './model/purchase/purchase.service';
import {SubcategoryService} from './model/subcategory/subcategory.service';
import {OfferService} from './model/offer/offer.service';
import {UserService} from './model/user/user.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    WishlistComponent,
    WishlistCreateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    NgbModule,
    HttpClientModule,
    MatProgressBarModule,
    MatCheckboxModule
  ],
  providers: [
    NaturalPersonService,
    ConfigService,
    SubcategoryService,
    BusinessService,
    PurchaseService,
    OfferService,
    UserService,
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
