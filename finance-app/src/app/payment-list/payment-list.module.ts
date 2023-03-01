import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentCardModule } from '../payment-card/payment-card.module';

import * as components from './components';

@NgModule({
  declarations: [...components.components],
  imports: [
    CommonModule,
    PaymentCardModule
  ],
  exports: [
    ...components.components
  ]
})
export class PaymentListModule { }
