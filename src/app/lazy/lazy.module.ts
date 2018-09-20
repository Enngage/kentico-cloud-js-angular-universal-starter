import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { parse, stringify } from 'flatted';
import { ContentItem, DeliveryClient, IDeliveryClient, ItemResponses } from 'kentico-cloud-delivery';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-lazy-view',
  template: `
  <h3>Lazy component</h3><p>Response from KC:</p>
  <div><ngx-json-viewer [expanded]="false" [json]="jsonData"></ngx-json-viewer></div>
  `
})
export class LazyComponent implements OnInit {

  public response?: ItemResponses.DeliveryItemResponse<ContentItem>;
  public jsonData?: any;

  private deliveryClient: IDeliveryClient = new DeliveryClient({
    projectId: 'da5abe9f-fdad-4168-97cd-b3464be2ccb9'
  });

  constructor() { }

  ngOnInit() {
    this.deliveryClient.item('warrior').getObservable().subscribe(
      response => {
        this.response = response;

        const jsonString = stringify(this.response);
        this.jsonData = parse(jsonString);
      }
    );
  }
}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full' }
    ]),
    CommonModule,
    NgxJsonViewerModule
  ]
})
export class LazyModule {

}
