import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Delivery-js-sdk with Angular universal demo</h1>
  <a class="link" routerLink="/">Home</a>
  <a class="link" routerLink="/lazy">Lazy</a>
  <a class="link" routerLink="/lazy/nested">Lazy_Nested</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
