import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnit: string): any {

    if (!value) {
      return '';
    }
    switch (targetUnit) {
      case 'km':
        return value * 1.69034;
        break;
      case 'm':
        return value * 1.69034 * 1000;
        break;
      default:
        throw new Error("Not Defined");

    }

    return value * 1.6;
  }

}
