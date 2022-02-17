import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogData } from "../interface/log.interface";

@Injectable({
  providedIn: 'root'
})
export class LogService {
  content: Subject<LogData> = new Subject();
}
