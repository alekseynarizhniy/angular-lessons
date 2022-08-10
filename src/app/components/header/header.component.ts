import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProductWrapper } from '../../classes/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public goodsArray: ProductWrapper[] = [];

  constructor(public store: Store<any>) {
    this.store.select('addGoods').subscribe((val) => (this.goodsArray = val));
  }
}
