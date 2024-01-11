import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
  standalone: true,
})
export class ArrayToStringPipe implements PipeTransform {
  transform(value: any[],param:string): string {
    if (!value) return '';
    return value.join(param);
  }
}

@Pipe({
  name: 'firstLine',
  standalone: true,
})
export class FirstLinePipe implements PipeTransform {
  transform(value: string[]): string {
    if (value.length > 0) {
      return value[0];
    }
    return '';
  }
}


@Pipe({
  name: 'lineToString',
  standalone: true,
})
export class LineToString implements PipeTransform {
  transform(value: any): string {
    if (!value) return '';
    if (value.toString().startsWith('Date:')) {
      console.log("inside it");
      return value.substring(6)}
    return value.line;
  }
}


@Pipe({
  name: 'removeDatePrefix',
  standalone: true
})
export class RemoveDatePrefixPipe implements PipeTransform {
  transform(value: any): string {
    // Check if the input string starts with "Date: " and remove it
    if (value && value.startsWith('Date: ')) {
      return value.substring(6);
    } else {
      return value;
    }
  }
}



