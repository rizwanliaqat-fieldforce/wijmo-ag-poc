import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
// import Wijmo modules
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import * as wjcCore from 'wijmo/wijmo';

// import ag grid module
import { AgGridModule } from 'ag-grid-angular';
//import {AgGridModule} from "@ag-grid-community/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularAdvancedGridComponent } from './components/angular-grid/angular-grid.component';
import { WijmoGridComponent } from './components/wijmo-grid/wijmo-grid.component';
import { NumberFormatterComponent } from './components/angular-grid/custom-cell-filter/number-formatter.component';
import { NumericEditorComponent } from './components/angular-grid/custom-cell-filter/numeric-editor.component';
import { RangeFilterComponent } from './components/angular-grid/custom-cell-filter/range-filter.component';
import { CustomCellFilterComponent } from './components/angular-grid/custom-cell-filter/custom-cell-filter.component';
import { RowDeleteComponent } from './components/angular-grid/custom-cell-filter/row-delete.component';
import { PaginatedGridComponent } from './components/angular-grid/paginated-grid/paginated-grid.component';
import { ServerSortFilterComponent } from './components/angular-grid/server-sort-filter/server-sort-filter.component';
import { AgDemoGridComponent } from './components/angular-grid/ag-demo-grid/ag-demo-grid.component';
import { SelectableCheckboxComponent } from './components/wijmo-grid/selectable-checkbox.component/selectable-checkbox.component';
import { CustomServerSideWijmoGridComponent } from './components/wijmo-grid/customized-server-side-wijmo/customized-server-side-wijmo.component';
import { FFWijmoGridComponent } from './components/wijmo-grid/ff-wijmo-grid.component/ff-wijmo-grid.component';
import { WijmoGridDemoComponent } from './components/wijmo-grid/basic-wrapper-wijmo-grid-demo/wijmo-grid-demo.component';
import { ActiveElementDirective } from './directives/active-element.directive';
import { FFAdvancedWijmoGridComponent } from './components/wijmo-grid/ff-advanced-wijmo-grid/ff-advanced-wijmo-grid.component';
import { FFIdFormatterComponent } from './components/wijmo-grid/ff-advanced-wijmo-grid/ff-id-formatter.component';
import { CommonModule } from '@angular/common';
import { AdvancedWijmoGridDemoComponent } from './components/wijmo-grid/advanced-wrapper-wijmo-grid-demo/advanced-wijmo-grid-demo.component';
import { DynamicViewDirective } from './directives/dynamic-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    AngularAdvancedGridComponent,
    CustomCellFilterComponent,
    NumberFormatterComponent,
    NumericEditorComponent,
    RangeFilterComponent,
    RowDeleteComponent,
    PaginatedGridComponent,
    ServerSortFilterComponent,
    AgDemoGridComponent,
    WijmoGridComponent,
    SelectableCheckboxComponent,
    CustomServerSideWijmoGridComponent,
    WijmoGridDemoComponent,
    FFWijmoGridComponent,
    AdvancedWijmoGridDemoComponent,
    FFAdvancedWijmoGridComponent,
    FFIdFormatterComponent,
    ActiveElementDirective,
    DynamicViewDirective
  ],
  imports: [
    WjGridModule,
    WjInputModule,
    WjGridFilterModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AgGridModule.withComponents([NumberFormatterComponent, NumericEditorComponent, RangeFilterComponent, RowDeleteComponent]),
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [FFIdFormatterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
