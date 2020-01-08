import { Component, OnInit, ViewChild } from '@angular/core';
import { CollectionView, ObservableArray } from 'wijmo/wijmo';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'wijmo-grid-demo',
    templateUrl: './wijmo-grid-demo.component.html'
})

export class WijmoGridDemoComponent implements OnInit {

    rowData: any;
    colDefs: any;

    colDefId = {
        header: "ID",
        binding: "id",
        allowSorting: false,
        allowFilter: false
    };

    colDefAthlete = {
        header: "Athlete",
        binding: "athlete",
        allowSorting: true,
        allowFilter: true
    };

    colDefAge = {
        header: "Age",
        binding: "age",
        allowSorting: true,
        allowFilter: true
    };

    colDefCountry = {
        header: "Country",
        binding: "country",
        allowSorting: true,
        allowFilter: true
    };

    colDefYear = {
        header: "Year",
        binding: "year",
        allowSorting: true,
        allowFilter: true
    };

    colDefSport = { header: "Sport", binding: "sport" };
    colDefGold = { header: "Gold", binding: "gold" };
    colDefSilver = { header: "Silver", binding: "silver" };
    colDefBronze = { header: "Bronze", binding: "bronze" };

    constructor(private dataService: DataService) {
        this.colDefs = [
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
    }


    ngOnInit() {
        this.dataService.getAthletes({ startRow: 0, endRow: 120 })
            .subscribe(res => {
                this.rowData = res.rows;
            });
    }
}

