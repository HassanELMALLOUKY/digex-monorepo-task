import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
  standalone: true,
})
export class ArrayToStringPipe implements PipeTransform {
  transform(value: any[]): string {
    return value.map(item => item['line']).join('\n');
  }
}
