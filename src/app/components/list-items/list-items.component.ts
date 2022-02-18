import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-list-items-component',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit{

  @Input() data: {[k: string]: any}[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  get listData() {
    // This method will re-defining 'datetime/createDate/lastUpdate' property to Date format instead of string
    return this.data.map((item: {[k: string]: string}) => {
      let obj;
      if(item["datetime"]) {
        obj = {...item, datetime: new Date(item["datetime"])}
      }
      if(item["lastUpdate"] || item["createDate"]) {
        obj = {...item, lastUpdate: new Date(item["lastUpdate"]), createDate: new Date(item["createDate"])}
      }
      return obj;
    });
  }
}
