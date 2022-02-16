import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-list-items-component',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit{

  @Input('data') listData: {[k: string]: any}[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
