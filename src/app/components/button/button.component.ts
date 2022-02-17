import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-button-component',
  template: `
    <button
      [disabled]="isDisabled"
      [className]="'btn ' + className"
      [type]="buttonType"
      [ngClass]="{'disabled': isDisabled}">
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
    .disabled {
      opacity: .4;
      cursor: not-allowed;
    }
  `]
})
export class ButtonComponent {
  @Input('type') buttonType: string = 'button';
  @Input() className: string = 'btn-primary';
  @Input('disabled') isDisabled: boolean = false;
}
