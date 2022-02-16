import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-list-items-component',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit{
  mockData = [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963eef66afa6",
      "recipient": "string",
      "sender": "string",
      "value": 0,
      "status": "string",
      "dateTime": "2022-02-16T02:12:13.081Z"
    },
    {
      "id": "3fa85f64-5717-4562-b3fc-2c96234234afa6",
      "recipient": "string",
      "sender": "string",
      "value": 0,
      "status": "string",
      "dateTime": "2022-02-16T02:12:13.081Z"
    },
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963th4f66afa6",
      "recipient": "string",
      "sender": "string",
      "value": 0,
      "status": "string",
      "dateTime": "2022-02-16T02:12:13.081Z"
    }
  ]
  constructor() {}

  ngOnInit(): void {
  }
}
