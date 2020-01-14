import { Component, OnInit, ViewChild, Input, Injector, InjectionToken } from '@angular/core';

import { CollectionView, EventArgs } from 'wijmo/wijmo';
import { FlexGridFilter, FilterType } from 'wijmo/wijmo.grid.filter';
import { FlexGrid } from 'wijmo/wijmo.grid';
import { DynamicData } from 'src/app/models/DynamicData';
import { ColumDefinition } from 'src/app/models/ColumDefinition';

@Component({
    selector: 'ff-advanced-wijmo-grid',
    templateUrl: './ff-advanced-wijmo-grid.component.html',
    styleUrls: ['./ff-advanced-wijmo-grid.component.scss']
})
export class FFAdvancedWijmoGridComponent implements OnInit {

    // properties
    dataSource: CollectionView;
    colums: CollectionView;
    // input params
    @Input() rowData: any;
    @Input() columnData: ColumDefinition[];
    @Input() pageSize: number;
    @Input() pagination: boolean;
    @ViewChild('filter', null) filter: FlexGridFilter;

    constructor(public paramsInjector: Injector) {
        console.log("ctor - ff wijmo grid");
        this.colums = new CollectionView();
        this.pageSize = 10;
    }

    createInjector(item) {
        let injector = Injector.create([
            { provide: DynamicData, useValue: item }
        ], this.paramsInjector);
        return injector;
    }

    ngOnInit() {
        console.log("on init - ff advanced wijmo grid");
        this.dataSource = new CollectionView(this.rowData,
            {
                pageSize: this.pagination ? this.pageSize : 0
            });

        let filterCols = [];
        this.columnData.forEach((item, index) => {
            this.colums.sourceCollection.splice(Math.max(0, index), 0, item);
            if (item && item.allowFilter) {
                filterCols.push(item.binding);
            }
        });

        this.filter.filterColumns = filterCols;
    }

    gridReady(grid: FlexGrid, e: EventArgs) {
        console.log("initialized - ff advanced wijmo grid");
    }
}