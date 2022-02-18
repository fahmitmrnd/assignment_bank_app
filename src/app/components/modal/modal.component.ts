import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-modal-component',
  templateUrl: './moda.componnt.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() data: any;
  @Output() close: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }

  onClose() {
    this.close.next();
  }
}
