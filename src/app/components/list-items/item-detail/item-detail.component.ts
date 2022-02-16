import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-item-detail-component',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() data: {[k: string]: any} = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  get itemUI() {
    const item = Object.keys(this.data);
    return item;
  }
}
