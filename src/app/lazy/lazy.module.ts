import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularHttpServiceModule } from 'kentico-cloud-angular-http-service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { LazyComponent } from './lazy.component';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full' }
    ]),
    CommonModule,
    NgxJsonViewerModule,
    AngularHttpServiceModule
  ]
})
export class LazyModule {

}
