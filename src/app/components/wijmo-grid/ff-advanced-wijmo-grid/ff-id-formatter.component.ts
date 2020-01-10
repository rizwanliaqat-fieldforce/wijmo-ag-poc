import {Component, Input} from '@angular/core';
import { DynamicData } from 'src/app/models/DynamicData';

@Component({
  selector: 'ff-id-formatter-cell',
  template: `
    <div style="color:white;font-style:italic;background:grey;text-align:center;">{{ params.item.id }}</div>
  `
})
export class FFIdFormatterComponent {
  
  constructor(public params: DynamicData) {
    //console.log("FF Number Formatter Component", params);
  }

  ngOnInit() {
  }
}
