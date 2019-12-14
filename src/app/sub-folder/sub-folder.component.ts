import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-folder',
  templateUrl: './sub-folder.component.html',
  styleUrls: ['./sub-folder.component.css']
})


export class SubFolderComponent implements OnInit {
  Works : string = "Works";
  Products : any[];
  constructor() { }

  Add(Works)
  {
  //  let MyStr : string = MyFunc("Javad");
    alert(Works+" "+"Dargazi");
  }

Insert(product : string)
{
    this.Products.push(product);
}
  ngOnInit() {
  }

}
