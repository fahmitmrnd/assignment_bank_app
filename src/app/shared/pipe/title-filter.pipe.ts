import { Pipe, PipeTransform } from "@angular/core";
import { iif } from "rxjs";

@Pipe({
  name: 'titleFilter',
  pure: false
})
export class TitleFilterPipe implements PipeTransform {
  transform(val: string) {
    const str = [...val].map((c: string, i: number) => {
      if(c === c.toUpperCase()) {
        c = ` ${c}`;
        return c;
      }
      if(!i) {
        return c.toUpperCase();
      }
      return c;
    })
    return str.join('');
  }
}
