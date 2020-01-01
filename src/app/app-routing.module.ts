import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// tslint:disable-next-line: max-line-length
const routes: Routes = [{ path: 'loadfeaturemodule', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
