import { Component, OnInit, ViewChild  } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { HttpClient } from "@angular/common/http";
import { AllModules } from "@ag-grid-enterprise/all-modules"; 

@Component({
  selector: "ag-advanced",
  template: `
    <div class="test-container">
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

      <ag-grid-angular
        #agGrid
        style="width: 1000px; height: 500px;"
        id="myGrid"
        class="ag-theme-balham-dark"
        [modules]="modules"
        [columnDefs]="columnDefs"
        [defaultColDef]="defaultColDef"
        [autoGroupColumnDef]="autoGroupColumnDef"
        [rowModelType]="rowModelType"
        [rowGroupPanelShow]="rowGroupPanelShow"
        [pivotPanelShow]="pivotPanelShow"
        [animateRows]="true"
        [sideBar]="sideBar"
        [suppressAggFuncInHeader]="true"
        [rowData]="rowData"
        (gridReady)="onGridReady($event)"
      ></ag-grid-angular>
    </div>
  `
,
styleUrls: ['./angular-grid.component.scss']
})
export class AngularAdvancedGridComponent {
  gridApi;
  gridColumnApi;
  modules: any = AllModules;

  columnDefs;
  defaultColDef;
  autoGroupColumnDef;
  rowModelType;
  rowGroupPanelShow;
  pivotPanelShow;
  sideBar;
  rowData: [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      colDefAthlete,
      colDefAge,
      colDefCountry,
      colDefYear,
      colDefSport,
      colDefGold,
      colDefSilver,
      colDefBronze
    ];
    this.defaultColDef = {
      width: 100,
      allowedAggFuncs: ["sum", "min", "max", "random"],
      sortable: true,
      resizable: true
    };
    this.autoGroupColumnDef = { width: 150 };
    this.rowModelType = "serverSide";
    this.rowGroupPanelShow = "always";
    this.pivotPanelShow = "always";
    this.sideBar = {
      toolPanels: ["columns", "filters"]
    };
  }

  onBtApply(event) {
    console.log(event);
    var cols = [];
    if (getBooleanValue("#athlete")) {
      cols.push(colDefAthlete);
    }
    if (getBooleanValue("#age")) {
      cols.push(colDefAge);
    }
    if (getBooleanValue("#country")) {
      cols.push(colDefCountry);
    }
    if (getBooleanValue("#year")) {
      cols.push(colDefYear);
    }
    if (getBooleanValue("#sport")) {
      cols.push(colDefSport);
    }
    if (getBooleanValue("#gold")) {
      cols.push(colDefGold);
    }
    if (getBooleanValue("#silver")) {
      cols.push(colDefSilver);
    }
    if (getBooleanValue("#bronze")) {
      cols.push(colDefBronze);
    }
    this.gridApi.setColumnDefs(cols);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
      .subscribe(data => {
        var fakeServer = createFakeServer(data);
        var datasource = createServerSideDatasource(fakeServer, params);
        params.api.setServerSideDatasource(datasource);
      });

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
var colDefAthlete = {
  field: "athlete",
  enableRowGroup: true,
  enablePivot: true
};
var colDefAge = {
  field: "age",
  enableRowGroup: true,
  filter: true
};
var colDefCountry = {
  field: "country",
  enableRowGroup: true,
  enablePivot: true,
  rowGroup: true,
  filter: "agSetColumnFilter",
  filterParams: { values: countries() }
};
var colDefYear = {
  field: "year",
  enableRowGroup: true,
  enablePivot: true,
  rowGroup: true,
  filter: "agSetColumnFilter",
  filterParams: {
    values: ["2000", "2004", "2008", "2012"]
  }
};
var colDefSport = {
  field: "sport",
  enableRowGroup: true,
  enablePivot: true
};
var colDefGold = {
  field: "gold",
  aggFunc: "sum",
  enableValue: true
};
var colDefSilver = {
  field: "silver",
  aggFunc: "sum",
  enableValue: true
};
var colDefBronze = {
  field: "bronze",
  aggFunc: "sum",
  enableValue: true
};
function getBooleanValue(cssSelector) {
  return document.querySelector(cssSelector).checked === true;
}
function createServerSideDatasource(fakeServer, gridInstance) {
  function ServerSideDatasource(fakeServer, gridInstance) {
    this.fakeServer = fakeServer;
    this.gridInstance = gridInstance;
  }
  ServerSideDatasource.prototype.getRows = function(params) {
    var that = this;
    this.fakeServer.getData(params.request, function successCallback(resultForGrid, lastRow, secondaryColDefs) {
      params.successCallback(resultForGrid, lastRow);
      that.setSecondaryColsIntoGrid(secondaryColDefs);
    });
  };
  ServerSideDatasource.prototype.setSecondaryColsIntoGrid = function(secondaryColDefs) {
    var colDefHash = this.createColsHash(secondaryColDefs);
    if (this.colDefHash !== colDefHash) {
      this.gridInstance.columnApi.setSecondaryColumns(secondaryColDefs);
      this.colDefHash = colDefHash;
    }
  };
  ServerSideDatasource.prototype.createColsHash = function(colDefs) {
    if (!colDefs) {
      return null;
    }
    var parts = [];
    var that = this;
    colDefs.forEach(function(colDef) {
      if (colDef.children) {
        parts.push(colDef.groupId);
        parts.push("[" + that.createColsHash(colDef.children) + "]");
      } else {
        parts.push(colDef.colId);
        if (colDef.headerName) {
          parts.push(colDef.headerName);
        }
      }
    });
    return parts.join(",");
  };
  return new ServerSideDatasource(fakeServer, gridInstance);
}
function createFakeServer(data) {
  function FakeServer(allData) {
    this.allData = allData;
  }
  FakeServer.prototype.getData = function(request, callback) {
    var rowGroupCols = request.rowGroupCols;
    var groupKeys = request.groupKeys;
    var valueCols = request.valueCols;
    var pivotCols = request.pivotCols;
    var pivotMode = request.pivotMode;
    var pivotActive = pivotMode && pivotCols.length > 0 && valueCols.length > 0;
    var filterModel = request.filterModel;
    var sortModel = request.sortModel;
    var rowData = this.allData;
    var secondaryColDefs = null;
    rowData = this.filterList(rowData, filterModel);
    if (pivotActive) {
      var pivotResult = this.pivot(pivotCols, rowGroupCols, valueCols, rowData);
      rowData = pivotResult.data;
      valueCols = pivotResult.aggCols;
      secondaryColDefs = pivotResult.secondaryColDefs;
    }
    if (rowGroupCols.length > 0) {
      rowData = this.filterOutOtherGroups(rowData, groupKeys, rowGroupCols);
      var showingGroupLevel = rowGroupCols.length > groupKeys.length;
      if (showingGroupLevel) {
        rowData = this.buildGroupsFromData(rowData, rowGroupCols, groupKeys, valueCols);
      }
    } else if (pivotMode) {
      var rootGroup = this.aggregateList(rowData, valueCols);
      rowData = [rootGroup];
    }
    rowData = this.sortList(rowData, sortModel);
    var lastRowFound = rowData.length <= request.endRow;
    var lastRow = lastRowFound ? rowData.length : null;
    rowData = rowData.slice(request.startRow, request.endRow);
    setTimeout(function() {
      callback(rowData, lastRow, secondaryColDefs);
    }, 1000);
  };
  FakeServer.prototype.sortList = function(data, sortModel) {
    var sortPresent = sortModel && sortModel.length > 0;
    if (!sortPresent) {
      return data;
    }
    var resultOfSort = data.slice();
    resultOfSort.sort(function(a, b) {
      for (var k = 0; k < sortModel.length; k++) {
        var sortColModel = sortModel[k];
        var valueA = a[sortColModel.colId];
        var valueB = b[sortColModel.colId];
        if (valueA == valueB) {
          continue;
        }
        var sortDirection = sortColModel.sort === "asc" ? 1 : -1;
        if (valueA > valueB) {
          return sortDirection;
        } else {
          return sortDirection * -1;
        }
      }
      return 0;
    });
    return resultOfSort;
  };
  FakeServer.prototype.filterList = function(data, filterModel) {
    var filterPresent = filterModel && Object.keys(filterModel).length > 0;
    if (!filterPresent) {
      return data;
    }
    var resultOfFilter = [];
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      if (filterModel.age) {
        var age = item.age;
        var allowedAge = parseInt(filterModel.age.filter);
        if (filterModel.age.type == "equals") {
          if (age !== allowedAge) {
            continue;
          }
        } else if (filterModel.age.type == "lessThan") {
          if (age >= allowedAge) {
            continue;
          }
        } else {
          if (age <= allowedAge) {
            continue;
          }
        }
      }
      if (filterModel.year) {
        if (filterModel.year.indexOf(item.year.toString()) < 0) {
          continue;
        }
      }
      if (filterModel.country) {
        if (filterModel.country.values.indexOf(item.country) < 0) {
          continue;
        }
      }
      resultOfFilter.push(item);
    }
    return resultOfFilter;
  };
  FakeServer.prototype.iterateObject = function(object, callback) {
    if (!object) {
      return;
    }
    var keys = Object.keys(object);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = object[key];
      callback(key, value);
    }
  };
  FakeServer.prototype.pivot = function(pivotCols, rowGroupCols, valueCols, data) {
    var pivotData = [];
    var aggColsList = [];
    var colKeyExistsMap = {};
    var secondaryColDefs = [];
    var secondaryColDefsMap = {};
    data.forEach(function(item) {
      var pivotValues = [];
      pivotCols.forEach(function(pivotCol) {
        var pivotField = pivotCol.id;
        var pivotValue = item[pivotField];
        if (pivotValue !== null && pivotValue !== undefined && pivotValue.toString) {
          pivotValues.push(pivotValue.toString());
        } else {
          pivotValues.push("-");
        }
      });
      var pivotItem = {};
      valueCols.forEach(function(valueCol) {
        var valField = valueCol.id;
        var colKey = createColKey(pivotValues, valField);
        var value = item[valField];
        pivotItem[colKey] = value;
        if (!colKeyExistsMap[colKey]) {
          addNewAggCol(colKey, valueCol);
          addNewSecondaryColDef(colKey, pivotValues, valueCol);
          colKeyExistsMap[colKey] = true;
        }
      });
      rowGroupCols.forEach(function(rowGroupCol) {
        var rowGroupField = rowGroupCol.id;
        pivotItem[rowGroupField] = item[rowGroupField];
      });
      pivotData.push(pivotItem);
    });
    function addNewAggCol(colKey, valueCol) {
      var newCol = {
        id: colKey,
        field: colKey,
        aggFunc: valueCol.aggFunc
      };
      aggColsList.push(newCol);
    }
    function addNewSecondaryColDef(colKey, pivotValues, valueCol) {
      var parentGroup = null;
      var keyParts = [];
      pivotValues.forEach(function(pivotValue) {
        keyParts.push(pivotValue);
        var colKey = createColKey(keyParts);
        var groupColDef = secondaryColDefsMap[colKey];
        if (!groupColDef) {
          groupColDef = {
            groupId: colKey,
            headerName: pivotValue,
            children: []
          };
          secondaryColDefsMap[colKey] = groupColDef;
          if (parentGroup) {
            parentGroup.children.push(groupColDef);
          } else {
            secondaryColDefs.push(groupColDef);
          }
        }
        parentGroup = groupColDef;
      });
      parentGroup.children.push({
        colId: colKey,
        headerName: valueCol.aggFunc + "(" + valueCol.displayName + ")",
        field: colKey
      });
    }
    function createColKey(pivotValues, valueField?) {
      var result = pivotValues.join("|");
      if (valueField !== undefined) {
        result += "|" + valueField;
      }
      return result;
    }
    return {
      data: pivotData,
      aggCols: aggColsList,
      secondaryColDefs: secondaryColDefs
    };
  };
  FakeServer.prototype.buildGroupsFromData = function(rowData, rowGroupCols, groupKeys, valueCols) {
    var rowGroupCol = rowGroupCols[groupKeys.length];
    var field = rowGroupCol.id;
    var mappedRowData = this.groupBy(rowData, field);
    var groups = [];
    var that = this;
    this.iterateObject(mappedRowData, function(key, rowData) {
      var groupItem = that.aggregateList(rowData, valueCols);
      groupItem[field] = key;
      groups.push(groupItem);
    });
    return groups;
  };
  FakeServer.prototype.aggregateList = function(rowData, valueCols) {
    var result = {};
    valueCols.forEach(function(valueCol) {
      var field = valueCol.id;
      var values = [];
      rowData.forEach(function(childItem) {
        var value = childItem[field];
        if (value !== undefined) {
          values.push(value);
        }
      });
      switch (valueCol.aggFunc) {
        case "sum":
          var sum = 0;
          values.forEach(function(value) {
            sum += value;
          });
          result[field] = sum;
          break;
        case "min":
          var min = null;
          values.forEach(function(value) {
            if (min === null || min > value) {
              min = value;
            }
          });
          result[field] = min;
          break;
        case "max":
          var max = null;
          values.forEach(function(value) {
            if (max === null || max < value) {
              max = value;
            }
          });
          result[field] = max;
          break;
        case "random":
          result[field] = Math.random();
          break;
        default:
          console.warn("unrecognised aggregation function: " + valueCol.aggFunc);
          break;
      }
    });
    return result;
  };
  FakeServer.prototype.filterOutOtherGroups = function(originalData, groupKeys, rowGroupCols) {
    var filteredData = originalData;
    var that = this;
    groupKeys.forEach(function(groupKey, index) {
      var rowGroupCol = rowGroupCols[index];
      var field = rowGroupCol.id;
      filteredData = that.filter(filteredData, function(item) {
        return item[field] == groupKey;
      });
    });
    return filteredData;
  };
  FakeServer.prototype.groupBy = function(data, field) {
    var result = {};
    data.forEach(function(item) {
      var key = item[field];
      var listForThisKey = result[key];
      if (!listForThisKey) {
        listForThisKey = [];
        result[key] = listForThisKey;
      }
      listForThisKey.push(item);
    });
    return result;
  };
  FakeServer.prototype.filter = function(data, callback) {
    var result = [];
    data.forEach(function(item) {
      if (callback(item)) {
        result.push(item);
      }
    });
    return result;
  };
  return new FakeServer(data);
}