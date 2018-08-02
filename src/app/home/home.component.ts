import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators'
import { Product, ProductService } from '../shared/services/product.service';
import { ObservableMedia } from '../../../node_modules/@angular/flex-layout';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly columns$: Observable<number>;
  readonly products$: Observable<Product[]>;
  readonly breakPointsToColumnNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ],
  ]);

  constructor(private media: ObservableMedia, private productService: ProductService) { 
    this.products$ = productService.getAll();
    this.columns$ = this.media.asObservable()
      .pipe(map(mc => this.breakPointsToColumnNumber.get(mc.mqAlias)));
  }

  ngOnInit() {
  }

}
