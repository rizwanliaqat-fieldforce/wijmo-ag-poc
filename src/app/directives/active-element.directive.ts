import { Directive } from '@angular/core'

@Directive({
  selector: '[appActiveElement]',
  host: {
    '[style.background-color]': '"#3b5998"',
    '[style.color]': '"white"',
    '[class.anchor-text]': 'true'
  }
})
export class ActiveElementDirective {
  constructor() {
  }
}