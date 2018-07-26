import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'nga-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

}
