import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularAdvancedGridComponent } from './components/angular-grid/angular-grid.component';
import { WijmoGridComponent } from './components/wijmo-grid/wijmo-grid.component';
import { CustomCellFilterComponent } from './components/angular-grid/custom-cell-filter/custom-cell-filter.component';
import { PaginatedGridComponent } from './components/angular-grid/paginated-grid/paginated-grid.component';
import { ServerSortFilterComponent } from './components/angular-grid/server-sort-filter/server-sort-filter.component';
import { AgDemoGridComponent } from './components/angular-grid/ag-demo-grid/ag-demo-grid.component';
import { SelectableCheckboxComponent } from './components/wijmo-grid/selectable-checkbox.component/selectable-checkbox.component';
import { CustomServerSideWijmoGridComponent } from './components/wijmo-grid/customized-server-side-wijmo/customized-server-side-wijmo.component';
import { WijmoGridDemoComponent } from './components/wijmo-grid/wijmo-grid-demo/wijmo-grid-demo.component';


const routes: Routes = [
  { path: 'ag-demo-grid', component: AgDemoGridComponent },
  { path: 'angular-grid-custom', component: CustomCellFilterComponent },
  { path: 'angular-grid-advanced', component: AngularAdvancedGridComponent },
  { path: 'angular-grid-paginate', component: PaginatedGridComponent },
  { path: 'angular-grid-remote', component: ServerSortFilterComponent },
  { path: 'wijmo-grid-basic', component: WijmoGridComponent },
  { path: 'wijmo-grid-server-side', component: CustomServerSideWijmoGridComponent },
  { path: 'wijmo-grid-checkbox', component: SelectableCheckboxComponent },  
  { path: 'wijmo-grid-demo', component: WijmoGridDemoComponent },  
  { path: '**', component: WijmoGridDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
