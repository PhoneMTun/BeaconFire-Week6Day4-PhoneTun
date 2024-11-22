import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {path: '', redirectTo: '/product-management', pathMatch: 'full'},
  {path: 'product-management', component: ProductManagementComponent},
  {path: 'tabs', component: TabsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
