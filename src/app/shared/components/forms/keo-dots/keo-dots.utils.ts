import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPipe',
  standalone: true,
})
export class StrPipe implements PipeTransform {
  transform(value: any): string {
    return value.toString();
  }
}
