import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpcomingPaymentsTab } from './upcoming-payments-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UpcomingPaymentsTabRoutingModule } from './upcoming-payments-tab-routing.module';

import { PaymentCardModule } from '../payment-card/payment-card.module';
import { PaymentListModule } from '../payment-list/payment-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UpcomingPaymentsTabRoutingModule,
    PaymentCardModule,
    PaymentListModule
  ],
  declarations: [UpcomingPaymentsTab]
})
export class UpcomingPaymentsTabModule {}
