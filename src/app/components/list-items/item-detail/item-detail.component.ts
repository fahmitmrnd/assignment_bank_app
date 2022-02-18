import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/service/user.service";

@Component({
  selector: 'app-item-detail-component',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() data: any = {};

  constructor(
    private _usrService: UserService
  ) {
  }

  ngOnInit(): void {}

  get itemKey() {
    const item = Object.keys(this.data);
    return item;
  }

  get itemData() {
    return Object.keys(this.data).reduce((prev: any, cur: any) => {
      if(!prev[cur]) {
        prev[cur] = {
          value: this.data[cur],
          type: this.data[cur] instanceof Date ? 'date': typeof this.data[cur]
        }
      }
      return prev;
    }, {})
  }

  onSelect(userInfo: any) {
    this._usrService.userSelected.next(userInfo);
  }
}
