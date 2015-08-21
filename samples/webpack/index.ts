/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {Alert, Rating} from 'ng2-bootstrap';

@Component({
  selector: 'app'
})
@View({
  template: `
    <div></div>
    <alert type="info">Welcome to Angular2 Bootstrap starter pack!</alert>
    This is a webpack sample:
    <rating [(ng-model)]="rate" [max]="max" [readonly]="isReadonly" [titles]="['one','two','three']" ></rating>
  `,
  directives: [
    Alert,
    Rating,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})
export class Home {
}

bootstrap(Home);
