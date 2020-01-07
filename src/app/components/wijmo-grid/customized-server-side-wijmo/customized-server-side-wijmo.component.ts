import { Component, OnInit, ViewChild } from '@angular/core';


import { CollectionView, ObservableArray } from 'wijmo/wijmo';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-wijmo-grid-ss',
  templateUrl: './custom-server-side-wijmo.component.html'
})
export class CustomServerSideWijmoGridComponent implements OnInit {

  rowData: any;
  colums: CollectionView;
  SortOrder: string | null; 
  SortIndex: number | null;
  gridColums = { "athlete": 0, "age": 1, "country": 2, "year": 3, "sport": 4, "gold": 5, "silver": 5, "bronze": 5 };

  constructor(private dataService: DataService) {
    this.colums = new CollectionView();
  }


  beforeGridSort(grid: any, event: any) {
    console.log("sorting column");
    event.cancel = true;

    const cv = grid.collectionView;
    console.log("event", event);
    console.log("cv: ", cv);

    if (cv.sortDescriptions.length) {
      const sd = cv.sortDescriptions[0];
      cv._performRefresh();
      this.changeSorting(this.gridColums[sd.property], false);
      cv.sortDescriptions[0] = { ...sd };
    }
  }

  gridSort(grid: any, event: any) {
      console.log("sorted column");
    //event.cancel = true;
    const cv = grid.collectionView;
    console.log("event", event);
    console.log("cv: ", cv);

    if (cv.sortDescriptions.length) {
      const sd = cv.sortDescriptions[0];
      cv._performRefresh();
      //this.changeSorting(this.gridColums[sd.property], false);
      cv.sortDescriptions[0] = { ...sd };
    }
  }

  changeSorting(colIndex: any, isNumeric: boolean) {
    console.log("change sorting");
    if (this.SortIndex === colIndex) {
        // change direction
        this.SortOrder = (this.SortOrder === 'asc') ? 'desc' : 'asc';
    } else {
        this.SortOrder = 'asc';
        this.SortIndex = colIndex;
    }

    this.getData(120, 240);
  }

  ngOnInit() {

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
    this.getData();
  }

  getData(s=0, e=120) {
    console.log("getting data from service");
    this.dataService.getAthletes({ startRow: s, endRow: e }).subscribe(res => {
      this.rowData = new CollectionView(res.rows, {
        pageSize: 15
      });

      Object.keys(this.rowData.sourceCollection[0]).forEach((item, index) => {
        this.colums.sourceCollection.splice(Math.max(0, index), 0, item);
      });
    });
  }

  getBooleanValue(cssSelector) {
    return document.querySelector(cssSelector).checked === true;
  }

  onBtApply(event) {
    console.log(event);
    let cols = [];
    if (this.getBooleanValue("#athlete")) {
      cols.push('athlete');
    }
    if (this.getBooleanValue("#age")) {
      cols.push('age');
    }
    if (this.getBooleanValue("#country")) {
      cols.push('country');
    }
    if (this.getBooleanValue("#year")) {
      cols.push('year');
    }
    if (this.getBooleanValue("#sport")) {
      cols.push('sport');
    }
    if (this.getBooleanValue("#gold")) {
      cols.push('gold');
    }
    if (this.getBooleanValue("#silver")) {
      cols.push('silver');
    }
    if (this.getBooleanValue("#bronze")) {
      cols.push('bronze');
    }
    this.colums.sourceCollection = cols;
  }
}

