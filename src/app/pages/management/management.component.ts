import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-management-component',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  data = [
    {
      "id": "45738cda-1a77-4ffc-bcf3-6638f3ce1cc0",
      "name": "Ann Le",
      "idNo": "user12345",
      "bankAccountNo": "890809",
      "bankAccountBalance": 1200,
      "loginId": "user5678",
      "email": "user2@gmail.com",
      "address1": "user2 address1",
      "address2": "user2 address2",
      "city": "HCM",
      "postcode": "700000",
      "state": "HCM",
      "country": "VN",
      "createDate": "2022-02-18T01:30:54.000+00:00",
      "lastUpdate": "2022-02-18T04:54:45.000+00:00"
    },
    {
      "id": "7ac65df6-1d54-4797-87d5-0a97fdbe0101",
      "name": "Thanh Tam",
      "idNo": "user1234",
      "bankAccountNo": "941104",
      "bankAccountBalance": 1400,
      "loginId": "user1234",
      "email": "user1@gmail.com",
      "address1": "test address1123",
      "address2": "test address1",
      "city": "HCM",
      "postcode": "700000",
      "state": "HCM",
      "country": "VN",
      "createDate": "2022-02-18T01:29:33.000+00:00",
      "lastUpdate": "2022-02-18T04:55:50.000+00:00"
    },
    {
      "id": "e563db96-8f8d-44d1-bdc5-6f9034fe4756",
      "name": "Admin",
      "idNo": "admin1234",
      "bankAccountNo": "123456",
      "bankAccountBalance": 998000,
      "loginId": "admin1234",
      "email": "admin@gmail.com",
      "address1": "admin address1",
      "address2": "admin address2124",
      "city": "HCM",
      "postcode": "700000",
      "state": "HCM",
      "country": "VN",
      "createDate": "2022-02-18T01:28:43.000+00:00",
      "lastUpdate": "2022-02-18T03:27:05.000+00:00"
    }
  ]
  constructor() {}

  ngOnInit(): void {

  }
}
