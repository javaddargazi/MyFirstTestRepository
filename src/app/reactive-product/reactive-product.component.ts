import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import  {FormGroup,FormControl, Validators} from '@angular/forms'
import { debug } from 'util';

@Component({
  selector: 'app-reactive-product',
  templateUrl: './reactive-product.component.html',
  styleUrls: ['./reactive-product.component.css']
})
export class ReactiveProductComponent implements OnInit {

  productFrm = new FormGroup({
    name : new FormControl("x",Validators.required),
    category : new FormControl("y",Validators.maxLength(10)),
    price : new FormControl(0)
  })
  constructor(private readonly productService:ProductService) {
    this.getAllPeople();
   }

  ngOnInit() {
  }

  addProduct()
  {
    debugger;
    let product = this.productFrm.value;
    this.productService.create(product).subscribe(data => {
      debugger;
    },error => {

     }
    );
    //console.log(this.productFrm);
    //debugger;
  }

  getAllPeople()
  {
    this.productService.getAllPeople().subscribe(data => console.log(data));
  }

}
