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
import { WijmoGridDemoComponent } from './components/wijmo-grid/wijmo-grid-demo/wijmo-grid-demo.component';
import { ActiveElementDirective } from './directives/active-element.directive';

//wjcCore.setLicenseKey("FieldForce,getfieldforce.com,952571766294636#B0cI9buFkI1pjIEJCLi4TPRV5KaNHe6V4NNhFNZFTOPV6KjdmTXdWM7cERIdmWl3mb48EVnRzc8IDUj3WWKdTehlDZT3CUsVUeNlGSuhWUad4VpdlYoJ4S7E7YFl4T7gGbiR6MwJGe4ljTrg6M7ElY6oEdrgUatJGVBBnN8klVvJDbjZDW4sUR4VnWMNXUEh5bndFOaZWOPJVMWBDOmJDd8YWVMp6LndmazgTY8lXURFzRllWVolXeRdTaOJnNJ3WOj9kTmxWZ8plUVVEbrEFb6NXN9E7bR5kV7h7cihWayQTdD9GdO3SVyF5SyIXT9YVQLdlVopGMKRjRaVDarlVWqlFOaZGWHpUNUpnQBRXW8BXTVxUV4EXV4pXUURXVzlkc8cFNSlDc4YXTC56S6kXUyE6KZ96calnZw84V0lEdxE6cz2kWuhDU9oXaqJ7SKhzK5JUaIdjYh3iStJHNyYGOP94UrY5YiojITJCLiQzQ5QDM8YDNiojIIJCL9IDNxgTOzQDO0IicfJye35XX3JSSwIjUiojIDJCLi86bpNnblRHeFBCI4VWZoNFelxmRg2Wbql6ViojIOJyes4nI5kkTRJiOiMkIsIibvl6cuVGd8VEIgIXZ7VWaWRncvBXZSBybtpWaXJiOi8kI1xSfis4N8gkI0IyQiwiIu3Waz9WZ4hXRgAydvJVa4xWdNBybtpWaXJiOi8kI1xSfiQjR6QkI0IyQiwiIu3Waz9WZ4hXRgACUBx4TgAybtpWaXJiOi8kI1xSfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1xSfiUFO7EkI0IyQiwiIu3Waz9WZ4hXRgACdyFGaDxWYpNmbh9WaGBybtpWaXJiOi8kI1tlOiQmcQJCLiMTM6MzNwASOwgDM9EDMyIiOiQncDJCLi46bj9SZjJ7bmRGbllmZ4V6ZiojIz5GRiwiIlNmcvZEZsVWaGJiOiEmTDJCLiYzM6QTOyYjN7EzN5ITN9IiOiQWSiwSfiIjd9EDMyIiOiIXZ6JCLlNHbhZmOiI7cYJKe");

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
    ActiveElementDirective
  ],
  imports: [
    WjGridModule,
    WjInputModule,
    WjGridFilterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([NumberFormatterComponent, NumericEditorComponent, RangeFilterComponent, RowDeleteComponent]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
