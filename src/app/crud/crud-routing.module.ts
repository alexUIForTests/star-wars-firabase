import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateComponent} from './component/create/create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'create'},
  {path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule {
}
