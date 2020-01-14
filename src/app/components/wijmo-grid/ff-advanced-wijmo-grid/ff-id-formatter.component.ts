import {Component, Input, Inject} from '@angular/core';
import { DynamicData } from 'src/app/models/DynamicData';

@Component({
  selector: 'ff-id-formatter-cell',
  template: `
    <div style="color:white;font-style:italic;background:grey;text-align:center;">{{ params.item.id }}</div>
  `
})
export class FFIdFormatterComponent {
  
  constructor(@Inject(DynamicData) public params: any) {
    //console.log("FF Number Formatter Component", params);
  }

  ngOnInit() {
  }
}
