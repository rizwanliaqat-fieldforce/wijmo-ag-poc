import {Component} from '@angular/core';

@Component({
  selector: 'row-delete-btn',
  template: `
  <span><button style='background: transparent; color: red; border: 0px;' (click)="deleteRow($event)">X</button></span>`
})
export class RowDeleteComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  deleteRow(event) {
    this.params.api.updateRowData({ remove: [this.params.node.data] })
  }
}
