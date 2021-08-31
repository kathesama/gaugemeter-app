import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unidad'
})
export class UnidadPipe implements PipeTransform {

  transform(value: string): string {
    return (value + ' kPA');
  }

}
