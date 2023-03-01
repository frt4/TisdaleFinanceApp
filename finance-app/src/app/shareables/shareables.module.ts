import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import * as components from './components';

@NgModule({
  declarations: [...components.components],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [...components.components]
})
export class ShareablesModule { }
