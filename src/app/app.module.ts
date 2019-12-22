import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SubFolderComponent } from './sub-folder/sub-folder.component';
import { ProductComponent } from './product/product.component';
import { ReactiveProductComponent } from './reactive-product/reactive-product.component';
import { HttpService } from './Services/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './Services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    SubFolderComponent,
    ProductComponent,
    ReactiveProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService,ProductService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
