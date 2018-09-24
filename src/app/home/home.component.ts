import { Component, OnInit } from '@angular/core';
import { parse, stringify } from 'flatted';
import { AngularHttpService } from 'kentico-cloud-angular-http-service';
import { ContentItem, DeliveryClient, IDeliveryClient, ItemResponses } from 'kentico-cloud-delivery';

@Component({
  selector: 'app-home',
  template: `
  <h3>Response from KC:</h3>
  <div><ngx-json-viewer [expanded]="false" [json]="jsonData"></ngx-json-viewer></div>
  `
})
export class HomeComponent implements OnInit {

  public response?: ItemResponses.DeliveryItemResponse<ContentItem>;
  public jsonData?: any;

  private readonly deliveryClient: IDeliveryClient;

  constructor(angularHttpService: AngularHttpService) {
    this.deliveryClient = new DeliveryClient({
      projectId: 'da5abe9f-fdad-4168-97cd-b3464be2ccb9',
      httpService: angularHttpService
    });
  }

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
