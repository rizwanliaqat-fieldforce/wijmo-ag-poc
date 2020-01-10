import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class DynamicViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}