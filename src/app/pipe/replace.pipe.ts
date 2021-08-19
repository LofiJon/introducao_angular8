import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ReplacePipe'
})
export class ReplacePipe implements PipeTransform {
      transform(value: string, char: string, valueToReplace: string) {
            return value.replace(char, valueToReplace)
      }
}
