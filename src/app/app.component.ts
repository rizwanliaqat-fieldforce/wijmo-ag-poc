import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  constructor() { }

  ngOnInit() {
    
    // this.dataService.getCarsList().subscribe(res => {
    //   this.rowData = res;
    // });
  }

}