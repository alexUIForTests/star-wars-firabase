import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashRoutingModule} from './dash-routing.module';
import {MainComponent} from './main/main.component';
import {CustomMaterialModule} from '../shared/custom-material/custom-material.module';
import {FormsModule} from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import { PersonalInfoComponent } from './personal-info/personal-info.component';


@NgModule({
  declarations: [MainComponent, PersonalInfoComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    CustomMaterialModule,
    FormsModule,
    AgGridModule,
    HttpClientModule,
  ]
})
export class DashModule {
}
