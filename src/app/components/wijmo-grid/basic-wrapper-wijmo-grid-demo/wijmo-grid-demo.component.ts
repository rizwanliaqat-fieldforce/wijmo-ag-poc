import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ColumDefinition } from 'src/app/models/ColumDefinition';

@Component({
    selector: 'wijmo-grid-demo',
    templateUrl: './wijmo-grid-demo.component.html'
})

export class WijmoGridDemoComponent implements OnInit {

    rowData: any;
    colDefs: any;

    colDefId: ColumDefinition = {
        header: "ID",
        binding: "id",
        allowSorting: false,
        allowFilter: false
    };

    colDefAthlete: ColumDefinition  = {
        header: "Athlete",
        binding: "athlete",
        allowSorting: true,
        allowFilter: true
    };

    colDefAge: ColumDefinition  = {
        header: "Age",
        binding: "age",
        allowSorting: true,
        allowFilter: true
    };

    colDefCountry: ColumDefinition  = {
        header: "Country",
        binding: "country",
        allowSorting: true,
        allowFilter: true
    };

    colDefYear: ColumDefinition  = {
        header: "Year",
        binding: "year",
        format: 'f0',
        allowSorting: true,
        allowFilter: true
    };

    colDefSport: ColumDefinition  = { header: "Sport", binding: "sport" };
    colDefGold: ColumDefinition  = { header: "Gold", binding: "gold" };
    colDefSilver: ColumDefinition  = { header: "Silver", binding: "silver" };
    colDefBronze: ColumDefinition  = { header: "Bronze", binding: "bronze" };

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

