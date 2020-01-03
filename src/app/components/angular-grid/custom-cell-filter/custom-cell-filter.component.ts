import {Component, OnInit, ViewChild} from '@angular/core';
import {NumberFormatterComponent} from './number-formatter.component';
import {NumericEditorComponent} from './numeric-editor.component';
import {RangeFilterComponent} from './range-filter.component';
import { RowDeleteComponent } from './row-delete.component';
import { DataService } from 'src/app/services/data/data.service';

import { AgGridAngular } from 'ag-grid-angular';
import { IGetRowsParams, AllModules } from '@ag-grid-enterprise/all-modules';
import { Observable } from 'rxjs';


@Component({
  selector: 'custom-cell-filter',
  templateUrl: './custom-cell-filter.component.html',
})

export class CustomCellFilterComponent implements OnInit {

  gridApi;
  gridColumnApi;
  public modules: any = AllModules;
  @ViewChild('agGrid', null) agGrid: AgGridAngular;
  defaultColDef;
  rowData: any;

  constructor(private dataService: DataService) {
    this.defaultColDef = {
      width: 120,
      resizable: true
    };
  }

  colDefMake = {headerName: 'Make', field: 'make', 
  headerCheckboxSelection: true, 
  checkboxSelection: true};
  colDefModel = {headerName: 'Model', field: 'model'};
  colDefPrice = {
    headerName: 'Price',
    field: 'price',
    editable: true,
    cellRenderer: 'numberFormatterComponent',
    cellEditor: 'numericEditorComponent',
    filter: 'rangeFilterComponent'
  };

  colDefDelete = {
    headerName: '',
    cellRenderer: 'rowDeleteComponent',
    filter: false,
    sortable: false,
    width: 50
  };

  columnDefs = [
    this.colDefDelete,
    this.colDefMake,
    this.colDefModel,
    this.colDefPrice
  ];

  frameworkComponents = {
    numberFormatterComponent: NumberFormatterComponent,
    numericEditorComponent: NumericEditorComponent,
    rangeFilterComponent: RangeFilterComponent,
    rowDeleteComponent: RowDeleteComponent
  };

  private getRowData(startRow: number, endRow: number): Observable<any[]> {
    return this.dataService.getCarsList(startRow, endRow);
  }
  
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    let node: any = document.querySelector('#make');
    node.checked = true;
    node = document.querySelector('#model');
    node.checked = true;
    node = document.querySelector('#price');
    node.checked = true;
  }

  ngOnInit() {
    this.getRowData(0, 10)
    .subscribe(
      data => { 
        this.rowData = data
       }
      );
}

getSelectedRows() {
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  const selectedData = selectedNodes.map( node => node.data );
  const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
  alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

onBtApply(event) {
  console.log(event);
  var cols = [];
  cols.push(this.colDefDelete);

  if (this.getBooleanValue("#make")) {
    cols.push(this.colDefMake);
  }
  if (this.getBooleanValue("#model")) {
    cols.push(this.colDefModel);
  }
  if (this.getBooleanValue("#price")) {
    cols.push(this.colDefPrice);
  }

  this.gridApi.setColumnDefs(cols);
}

getBooleanValue(cssSelector) {
  return document.querySelector(cssSelector).checked === true;
}

}
