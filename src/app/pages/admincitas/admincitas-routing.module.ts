import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmincitasPage } from './admincitas.page';

const routes: Routes = [
  {
    path: '',
    component: AdmincitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmincitasPageRoutingModule {}
