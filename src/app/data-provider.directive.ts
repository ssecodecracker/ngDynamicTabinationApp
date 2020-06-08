import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDataProvider]'
})
export class DataProviderDirective {

  @Input() tabContentData: any;

}
