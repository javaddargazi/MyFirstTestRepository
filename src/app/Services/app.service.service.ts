import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  admin : boolean = true;
  Products : any = ["Javad","Alireza","Hasan"];
  constructor() { }

  add(Product)
  {
    this.Products.push(Product);
  }
  SetAdmin(admin)
  {
    this.admin = !admin;
  }



}
