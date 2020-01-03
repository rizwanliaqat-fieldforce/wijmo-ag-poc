import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AllModules } from "@ag-grid-enterprise/all-modules";


@Component({
  selector: "paginated-grid",
  template: `
    <div style="height: 600px; width: 1200px; padding-top: 26px; box-sizing: border-box;">
      <ag-grid-angular
        #agGrid
        style="width: 100%; height: 100%;"
        id="myGrid"
        class="ag-theme-balham-dark"
        [modules]="modules"
        [columnDefs]="columnDefs"
        [defaultColDef]="defaultColDef"
        [rowModelType]="rowModelType"
        [cacheBlockSize]="cacheBlockSize"
        [maxBlocksInCache]="maxBlocksInCache"
        [animateRows]="true"
        [pagination]="true"
        [rowData]="rowData"
        (gridReady)="onGridReady($event)"
      ></ag-grid-angular>
    </div>
  `
})
export class PaginatedGridComponent {
  gridApi;
  gridColumnApi;
  public modules: any = AllModules;

  columnDefs;
  defaultColDef;
  rowModelType;
  cacheBlockSize;
  maxBlocksInCache;
  rowData: [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      { field: "id" },
      {
        field: "athlete",
        width: 150
      },
      { field: "age" },
      { field: "country" },
      { field: "year" },
      { field: "sport" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" }
    ];
    this.defaultColDef = {
      width: 120,
      resizable: true
    };
    this.rowModelType = "serverSide";
    this.cacheBlockSize = 50;
    this.maxBlocksInCache = 10;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
      .subscribe( (data) => {
        var idSequence = 0;
        (data as Array<any>).forEach(function(item) {
          item.id = idSequence++;
        });
        var server = FakeServer(data);
        var datasource = ServerSideDatasource(server);
        params.api.setServerSideDatasource(datasource);
      });
  }
}

function ServerSideDatasource(server) {
  return {
    getRows: function(params) {
      setTimeout(function() {
        var response = server.getResponse(params.request);
        if (response.success) {
          params.successCallback(response.rows, response.lastRow);
        } else {
          params.failCallback();
        }
      }, 500);
    }
  };
}

function FakeServer(allData) {
  return {
    getResponse: function(request) {
      console.log("asking for rows: " + request.startRow + " to " + request.endRow);
      let rowsThisPage = allData.slice(request.startRow, request.endRow);
      // let lastRow = allData.length <= request.endRow ? data.length : -1;
      let lastRow = -1;

      return {
        success: true,
        rows: rowsThisPage,
        lastRow: lastRow
      };
    }
  };
}
