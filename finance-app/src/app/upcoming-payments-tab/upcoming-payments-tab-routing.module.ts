import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingPaymentsTab } from './upcoming-payments-tab.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingPaymentsTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingPaymentsTabRoutingModule {}
