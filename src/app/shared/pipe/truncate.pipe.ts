import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'censored',
  pure: false
})
export class TruncatePipe implements PipeTransform {
  transform(val: any, maxLength: number = 5) {
    if(typeof val === 'string' && [...val].length > 10) {
      const arr = [...val];
      const firstChars = arr.splice(0, val.length - maxLength);
      const censored = firstChars.map((c: string) => '*')
      return censored.concat(arr).join('');
    }

    return val;
  }
}
