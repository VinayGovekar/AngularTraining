import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipePipe implements PipeTransform {

  transform(values: any[], ...args: string[]): any {
    return values.filter(value=>value[args[0]]==args[1])
  }

}
