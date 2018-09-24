import { Component, OnInit } from '@angular/core';
import { parse, stringify } from 'flatted';
import { AngularHttpService } from 'kentico-cloud-angular-http-service';
import { ContentItem, DeliveryClient, IDeliveryClient, ItemResponses } from 'kentico-cloud-delivery';

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
