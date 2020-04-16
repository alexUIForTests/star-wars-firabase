import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CrudRoutingModule} from './crud-routing.module';
import {CreateComponent} from './component/create/create.component';
import {FirebaseApiService} from '../services/firebase-api.service';
import {CustomMaterialModule} from '../shared/custom-material/custom-material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    CustomMaterialModule,
    FormsModule,
  ],
  providers: [FirebaseApiService]
})
export class CrudModule {
}
