import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AgmCoreModule } from '@agm/core';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './login/login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PrintComponent } from './print/print.component';
import {CustomerOrderStatisticsComponent} from './customer-order-statistics/customer-order-statistics.component';
import {MonthsStatisticsComponent} from './months-statistics/months-statistics.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    OrdersComponent,
    CustomerDetailsComponent,
    JwPaginationComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    LoginComponent,
    PrintComponent,
    CustomerOrderStatisticsComponent,
    MonthsStatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot ({
      apiKey: ''
    }),
    Ng2SearchPipeModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
