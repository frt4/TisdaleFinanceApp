import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'upcoming-payments-tab',
        loadChildren: () => import('../upcoming-payments-tab/upcoming-payments-tab.module').then(m => m.UpcomingPaymentsTabModule)
      },
      {
        path: '',
        redirectTo: '/tabs/upcoming-payments-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/upcoming-payments-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
