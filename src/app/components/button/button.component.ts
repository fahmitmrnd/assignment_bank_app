import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-button-component',
  template: `
    <button [className]="'btn ' + className" [type]="buttonType">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .btn {
      margin: 0 .5rem;
      padding: 1rem 2rem;
      border-radius: 2rem;
      cursor: pointer;
      &-primary {
        color: #fff;
        background-color: #007bff;
      }
      &-success {
        color: #fff;
        background-color: #218838;
      }
      &-danger {
        color: #fff;
        background-color: #c82333;
      }
      &-warning {
        color: #000;
        background-color: #e0a800;
      }
    }
  `]
})
export class ButtonComponent {
  @Input('type') buttonType: string = 'button';
  @Input() className: string = 'btn-primary';
}
