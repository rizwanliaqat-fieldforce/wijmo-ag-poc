import { Component, ViewChild } from "@angular/core";
import { AllModules, IGetRowsParams, GridApi } from "@ag-grid-enterprise/all-modules";
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: "ag-demo-grid",
  template: `
  <div class="test-header">
        Select columns to show then hit 'Apply'
      </div>

      <div class="test-header">
        <label><input type="checkbox" id="athlete" />Athlete</label>
        <label><input type="checkbox" id="age" />Age</label>
        <label><input type="checkbox" id="country" />Country</label>
        <label><input type="checkbox" id="year" />Year</label>
        <label><input type="checkbox" id="sport" />Sport</label>

        <label><input type="checkbox" id="gold" />Gold</label>
        <label><input type="checkbox" id="silver" />Silver</label>
        <label><input type="checkbox" id="bronze" />Bronze</label>

        <button (click)="onBtApply($event)">Apply</button>
      </div>
    <div style="height: 500px; width: 1200px; padding-top: 26px; box-sizing: border-box;">
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
        rowSelection="multiple"
        (gridReady)="onGridReady($event)"
      ></ag-grid-angular>
    </div>
  `
})
export class AgDemoGridComponent {
  gridApi;
  gridColumnApi;
  public modules: any = AllModules;

  columnDefs;
  defaultColDef;
  rowModelType;
  cacheBlockSize;
  maxBlocksInCache;
  rowData: [];
  colDefId= {
    headerName: "ID",
        field: "id",
       // headerCheckboxSelection: true 
  };
  colDefAthlete = {
    headerName: "Athlete",
        field: "athlete",
        width: 150
  };
  colDefAge = {
    headerName: "Age",
        field: "age",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: ["equals", "lessThan", "greaterThan"],
          suppressAndOrCondition: true
        } 
  };
  colDefCountry = { 
    headerName: "Country",
    field: "country",
    filter: "agSetColumnFilter", 
    filterParams: { values: countries() }
  };
  colDefYear = {
    headerName: "Year",
        field: "year",
        filter: "agSetColumnFilter",
        filterParams: {
          values: ["2000", "2004", "2008", "2012"]
        }
  };
  colDefSport = { headerName: "Sport", field: "sport" };
  colDefGold = { headerName: "Gold", field: "gold" };
  colDefSilver = { headerName: "Silver", field: "silver" };
  colDefBronze = { headerName: "Bronze", field: "bronze" };

  constructor(private dataService: DataService) {
    this.columnDefs = [
      this.colDefId,
      this.colDefAthlete,
      this.colDefAge,
      this.colDefCountry,
      this.colDefYear,
      this.colDefSport,
      this.colDefGold,
      this.colDefSilver,
      this.colDefBronze
    ];

    this.defaultColDef = {
      width: 120,
      sortable: true,
      resizable: true
    };
    this.rowModelType = "serverSide";
    this.cacheBlockSize = 100;
    this.maxBlocksInCache = 10;
  }

getBooleanValue(cssSelector) {
    return document.querySelector(cssSelector).checked === true;
  }

  onBtApply(event) {
    console.log(event);
    var cols = [];
    if (this.getBooleanValue("#athlete")) {
      cols.push(this.colDefAthlete);
    }
    if (this.getBooleanValue("#age")) {
      cols.push(this.colDefAge);
    }
    if (this.getBooleanValue("#country")) {
      cols.push(this.colDefCountry);
    }
    if (this.getBooleanValue("#year")) {
      cols.push(this.colDefYear);
    }
    if (this.getBooleanValue("#sport")) {
      cols.push(this.colDefSport);
    }
    if (this.getBooleanValue("#gold")) {
      cols.push(this.colDefGold);
    }
    if (this.getBooleanValue("#silver")) {
      cols.push(this.colDefSilver);
    }
    if (this.getBooleanValue("#bronze")) {
      cols.push(this.colDefBronze);
    }
    this.gridApi.setColumnDefs(cols);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    let datasource = {
      getRows: (params: any) => {
        console.log("asking for rows: " + params.request.startRow + " to " + params.request.endRow);
        this.dataService.getAthletes(params.request)
                  .subscribe(
                    data =>  { 
                      params.successCallback(data.rows, data.lastRow)
                    },
                    error => params.failCallback()
                  );
                  
      }
    };
    
    this.gridApi.setServerSideDatasource(datasource);

    let node: any = document.querySelector('#athlete');
    node.checked = true;
    node = document.querySelector('#age');
    node.checked = true;
    node = document.querySelector('#country');
    node.checked = true;
    node = document.querySelector('#year');
    node.checked = true;
    node = document.querySelector('#sport');
    node.checked = true;
    node = document.querySelector('#gold');
    node.checked = true;
    node = document.querySelector('#silver');
    node.checked = true;
    node = document.querySelector('#bronze');
    node.checked = true;
  }
}


function countries() {
  return [
    "United States",
    "Russia",
    "Australia",
    "Canada",
    "Norway",
    "China",
    "Zimbabwe",
    "Netherlands",
    "South Korea",
    "Croatia",
    "France",
    "Japan",
    "Hungary",
    "Germany",
    "Poland",
    "South Africa",
    "Sweden",
    "Ukraine",
    "Italy",
    "Czech Republic",
    "Austria",
    "Finland",
    "Romania",
    "Great Britain",
    "Jamaica",
    "Singapore",
    "Belarus",
    "Chile",
    "Spain",
    "Tunisia",
    "Brazil",
    "Slovakia",
    "Costa Rica",
    "Bulgaria",
    "Switzerland",
    "New Zealand",
    "Estonia",
    "Kenya",
    "Ethiopia",
    "Trinidad and Tobago",
    "Turkey",
    "Morocco",
    "Bahamas",
    "Slovenia",
    "Armenia",
    "Azerbaijan",
    "India",
    "Puerto Rico",
    "Egypt",
    "Kazakhstan",
    "Iran",
    "Georgia",
    "Lithuania",
    "Cuba",
    "Colombia",
    "Mongolia",
    "Uzbekistan",
    "North Korea",
    "Tajikistan",
    "Kyrgyzstan",
    "Greece",
    "Macedonia",
    "Moldova",
    "Chinese Taipei",
    "Indonesia",
    "Thailand",
    "Vietnam",
    "Latvia",
    "Venezuela",
    "Mexico",
    "Nigeria",
    "Qatar",
    "Serbia",
    "Serbia and Montenegro",
    "Hong Kong",
    "Denmark",
    "Portugal",
    "Argentina",
    "Afghanistan",
    "Gabon",
    "Dominican Republic",
    "Belgium",
    "Kuwait",
    "United Arab Emirates",
    "Cyprus",
    "Israel",
    "Algeria",
    "Montenegro",
    "Iceland",
    "Paraguay",
    "Cameroon",
    "Saudi Arabia",
    "Ireland",
    "Malaysia",
    "Uruguay",
    "Togo",
    "Mauritius",
    "Syria",
    "Botswana",
    "Guatemala",
    "Bahrain",
    "Grenada",
    "Uganda",
    "Sudan",
    "Ecuador",
    "Panama",
    "Eritrea",
    "Sri Lanka",
    "Mozambique",
    "Barbados"
  ];
}