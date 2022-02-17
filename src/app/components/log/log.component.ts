import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LogData } from 'src/app/shared/interface/log.interface';
import { LogService } from 'src/app/shared/service/log.service';

@Component({
  selector: 'app-log-component',
  template: `
    <div *ngIf="content && content['message']" [class]="'container ' + content['type']">
    <mat-icon (click)="onClose()">close</mat-icon>
      <p>{{ content['message'] }}</p>
    </div>
  `,
  styles: [`
    .container {
      position: absolute;
      top: 5rem;
      right: 0;
      max-width: 20rem;
      display: flex;
      align-items: flex-start;
      background-color: blue;

      mat-icon {
        font-size: 1.8rem;
        color: #fff;
        cursor: pointer;
        padding: .2rem;
      }

      p {
        font-size: 1.3rem;
        font-weight: bold;
        padding: 1rem;
        padding-left: .3rem;
      }
    }
    .success {
      color: #fff;
      background-color: #218838;
    }
    .fail {
      color: #fff;
      background-color: #c82333;
    }
    .warning {
      color: #000;
      background-color: #e0a800;
    }
  `],
})
export class LogComponent implements OnInit, OnDestroy{
  unsubscribe$: Subject<any> = new Subject();

  content: LogData;
  constructor(
    private _logService: LogService
  ) {}

  ngOnInit(): void {
    this._logService.content
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: LogData) => {
      this.content = res;
    })
  }

  onClose() {
    this._logService.content.next({
      message: '',
      type: ''
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
