import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product>;
  product = new Product("","",0);


  constructor(private readonly productService : ProductService) 
  { 
    //debugger;
     this.products = this.productService.products;
  }
  addProduct(form){
    let newProduct = this.product;
    console.table(newProduct);
    debugger;
    // let newProduct = this.product;
    // console.table(this.product);
    // debugger;
    //console.table(form.form.value);
  }

  ngOnInit() {
  }

}
