import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTruncate'
})
export class StringTruncatePipe implements PipeTransform {

 transform(value: string, limit: number = 10, ellipsis: string = '...'): string {
   return value.length > limit ? value.substring(0, limit) + ellipsis : value;
 }

}
