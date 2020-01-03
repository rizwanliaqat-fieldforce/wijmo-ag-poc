import { Component, OnInit, ViewChild  } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-wijmo-grid-checkbox',
  templateUrl: './selectable-checkbox.component.html'
})

export class SelectableCheckboxComponent {
  data: any[];
  quickEdit: boolean = true;

  // DataSvc will be passed by derived classes
  constructor() {
      this.data = this.getData(100);
  }

  getData(cnt: number): any[] {
    let data = [],
        today = new Date();
    for (let i = 0; i < cnt; i++) {
        data.push({
            sel: false,
            title: this.getOneOf(['Lunch Tomorrow', 'Meeting on Friday', 'Quarterly Review', 'Evaluation']),
            from: this.getOneOf(['joe@joe.com', 'mark@smith.com', 'todd@schick.com', 'sun@wong.com']),
            priority: this.getOneOf([1, 2, 3]),
            immediate: Math.random() > .75,
            date: wjcCore.DateTime.addDays(today, i)
        });
    }
    return data;
}

getOneOf(arr: any[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

  initializeGrid(flex: any) {
      flex.formatItem.addHandler((s: any, e: any) => {
          if (e.panel == s.columnHeaders) {
              if (s.columns[e.col].binding == 'sel') {
                  e.cell.innerHTML = '<input class="select-all" tabindex="-1" type="checkbox">';
                  this._updateSelectAllBox(s);
              }
          } else if (e.panel == s.cells) {
              wjcCore.setAttribute(
                  e.cell.parentElement,
                  'aria-selected',
                  s.rows[e.row].dataItem.sel
              );
          }
      });

      // initialize column widths
      flex.autoSizeColumns(null, null, null, 18);

      // select/de-select all items when user clicks the check box on the header
      flex.hostElement.addEventListener('click', (e: MouseEvent) => {
          if (wjcCore.hasClass(<HTMLInputElement>e.target, 'select-all') &&
              e.target instanceof HTMLInputElement) {
              flex.deferUpdate(() => {
                  flex.collectionView.items.forEach((item: any) => {
                      item.sel = (<HTMLInputElement>e.target).checked;
                  });
              });
          }
      });
  }

   // update the select all checkbox state
   private _updateSelectAllBox(grid: wjcGrid.FlexGrid) {
      let cb = grid.hostElement.querySelector('.select-all');
      if (cb instanceof HTMLInputElement) {
          let items = grid.collectionView.items,
          last = null,
          indeterminate = false;
          for (let i = 0; i < items.length; i++) {
              if (last != null && items[i].sel != last) {
                  indeterminate = true;
                  break;
              }
              last = items[i].sel;
          }
          if (indeterminate) {
              cb.checked = true;
              cb.indeterminate = true;
          } else {
              cb.checked = last;
          }
      }
  }
}