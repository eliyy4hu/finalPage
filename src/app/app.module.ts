import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PaymentComponent} from './payment/payment.component';
import {PayComponent} from './payment/pay/pay.component';
import {RequestPaymentComponent} from './payment/request-payment/request-payment.component';
import {AnyBankComponent} from './payment/pay/any-bank/any-bank.component';
import {InetBankComponent} from './payment/pay/inet-bank/inet-bank.component';
import {Routes, RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {MyServerComponent} from './my-server/my-server.component';
import {FormsModule} from '@angular/forms';
import { AdminComponentComponent } from './admin-component/admin-component.component';

const appRoutes: Routes = [
  {path:'admin',component: AdminComponentComponent},
  {path: 'pay', redirectTo: 'pay/anybank'},
  {
    path: 'pay',
    component: PayComponent,
    children: [{path: 'anybank', component: AnyBankComponent},
      {path: 'inetbank', component: InetBankComponent}]
  },
  {path: 'request', component: RequestPaymentComponent},
  {path: '**', redirectTo: 'pay/anybank'}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaymentComponent,
    PayComponent,
    RequestPaymentComponent,
    AnyBankComponent,
    InetBankComponent,
    FooterComponent,
    MyServerComponent,
    AdminComponentComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
