import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmincitasPageRoutingModule } from './admincitas-routing.module';

import { AdmincitasPage } from './admincitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmincitasPageRoutingModule
  ],
  declarations: [AdmincitasPage]
})
export class AdmincitasPageModule {}
