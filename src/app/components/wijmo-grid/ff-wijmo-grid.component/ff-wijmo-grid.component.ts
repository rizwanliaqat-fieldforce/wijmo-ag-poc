import { Component, OnInit, ViewChild, Input, ViewEncapsulation } from '@angular/core';

import { CollectionView, EventArgs } from 'wijmo/wijmo';
import { FlexGridFilter, FilterType } from 'wijmo/wijmo.grid.filter';
import { FlexGrid } from 'wijmo/wijmo.grid';
import { analyzeFileForInjectables } from '@angular/compiler';

interface ColumDefinition {
    header?: string;
    binding: string;
    allowSorting?: boolean;
    allowFilter?: boolean;
    width?: string;
}

@Component({
    selector: 'ff-wijmo-grid',
    templateUrl: './ff-wijmo-grid.component.html',
    styleUrls: ['ff-wijmo-grid.component.scss']
})
export class FFWijmoGridComponent implements OnInit {

    // properties
    private dataSource: CollectionView;
    private colums: CollectionView;
    // input params
    @Input() rowData: any;
    @Input() columnData: ColumDefinition[];
    @Input() pageSize: number;
    @Input() pagination: boolean;
    @ViewChild('filter', null) filter: FlexGridFilter;

    constructor() {
        console.log("ctor - ff wijmo grid");
        this.colums = new CollectionView();
        this.pageSize = 10;
    }

    ngOnInit() {
        console.log("on init - ff wijmo grid");
        this.dataSource = new CollectionView(this.rowData,
            {
                pageSize: this.pagination ? this.pageSize : 0
            });

            let filterCols = [];
            this.columnData.forEach((item, index) => {
                this.colums.sourceCollection.splice(Math.max(0, index), 0, item);
                if(item && item.allowFilter) {
                    filterCols.push(item.binding);
                }
            });

            this.filter.filterColumns = filterCols;
    }

    gridReady(grid: FlexGrid, e: EventArgs) {
        console.log("grid has been initialised");
    }
}