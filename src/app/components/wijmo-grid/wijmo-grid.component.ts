import { Component, OnInit, ViewChild  } from '@angular/core';

import { DataService } from '../../services/data/data.service';
import { CollectionView, ObservableArray } from 'wijmo/wijmo';

@Component({
  selector: 'app-wijmo-grid',
  templateUrl: './wijmo-grid.component.html' ,
  styleUrls: ['wijmo-grid.component.scss']
})
export class WijmoGridComponent implements OnInit {

rowData: any;
colums: CollectionView;

  constructor(private dataService: DataService) { 
    this.colums = new CollectionView();
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

    // option 2 -> async pipe 
    this.dataService.getAthletes({ startRow: 0, endRow: 120 }).subscribe(res => {
        this.rowData = new CollectionView(res.rows, {
            pageSize: 15
        });

        Object.keys(this.rowData.sourceCollection[0]).forEach( (item, index) => {
          this.colums.sourceCollection.splice(Math.max(0, index), 0, item);
        } );
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

