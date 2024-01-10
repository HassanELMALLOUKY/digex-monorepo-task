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
  transform(value: any[]): string {
    if (value && value.length > 0 && value[0].line) {
      return value[0].line;
    }
    return '';
  }
}

@Pipe({
  name: 'extractLine',
  standalone: true,
})
export class ExtractLinePipe implements PipeTransform {
  transform(dataArray: any[]): string[] {
    if (!dataArray || !dataArray.length) {
      return [];
    }

    return dataArray.map(item => {
      return item.line.line;
    });
  }
}

@Pipe({
  name: 'lineToString',
  standalone: true,
})
export class LineToString implements PipeTransform {
  transform(value: any): string {
    if (!value) return '';
    return value.line;
  }
}



