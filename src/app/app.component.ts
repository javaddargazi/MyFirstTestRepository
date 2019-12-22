import { Component } from '@angular/core';
import { AppServiceService } from './Services/app.service.service';
import { Product } from './Models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Products : any[];// =  this.AppService.Products;
  admin : boolean;// = this.AppService.admin;
constructor(private readonly AppService : AppServiceService) {
  this.Products  =  this.AppService.Products;
  this.admin = this.AppService.admin; 
}
add(Product)
{
  this.AppService.add(this.AppService.Products);
}
SetAdmin(admin)
{
  //debugger;
  this.AppService.SetAdmin(admin);  
  this.admin = this.AppService.admin;
}
}
