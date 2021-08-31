import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actuador'
})
export class ActuadorPipe implements PipeTransform {

  transform(value: number): string {
    return value === 1 ? 'On' : 'Off';		
	}
}
