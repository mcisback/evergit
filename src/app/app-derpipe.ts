import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'derp' })
export class DerpPipe implements PipeTransform {
  transform(value, args) {
    // console.log('DerpPipe value: ', value);

    if (value === undefined || value === null) {
      return [];
    }

    // console.log('DerpPipe Array.from(value): ', Array.from(value));

    return Array.from(value);
  }
}
