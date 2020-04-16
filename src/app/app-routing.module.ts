import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule)},
  {path: 'dashboard', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
