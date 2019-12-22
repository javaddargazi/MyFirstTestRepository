import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
//import { Http2SecureServer } from 'http2';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product> = [
    new Product("Apple 11","2016",100),
    new Product("Galaxy j5","2017",200),
    new Product("Hoawi","2018",300),
    new Product("HTC","2019",400)
  ];

  constructor(private readonly httpService:HttpService) {
     
  }

  create(product: any) {
    debugger;
    return this.httpService.post<any>(environment.webHookUrl,product);
    //http://webhook.site/a941323f-71ae-43c3-97e8-1cc64a01ed92 : from webhook.site
  }

  getAllPeople(){
    return this.httpService.getAll<any>(environment.swapiUrl);
  }
}
