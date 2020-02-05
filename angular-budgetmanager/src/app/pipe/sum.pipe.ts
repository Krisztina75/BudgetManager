import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: any, key: string): any {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
      sum += value[i][key]
    }
    return sum;
  }

}
