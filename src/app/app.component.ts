import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  admin : boolean = true;
  Products : any = ["Javad","Alireza","Hasan"];
  add(Product)
  {
    this.Products.push(Product);
  }
  SetAdmin()
  {
    this.admin = !this.admin;
  }


}
