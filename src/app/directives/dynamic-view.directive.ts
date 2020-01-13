import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ff-dynamic-view]',
})
export class DynamicViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}