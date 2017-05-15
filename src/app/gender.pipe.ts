import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'gender',
  pure: false
})

export class GenderPipe implements PipeTransform {
  transform(input: User[], gender) {
    var output: User[] = [];

    if (gender === "all") {
      return input;
    } else if (gender === "female") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].gender === "female") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (gender === "neutral") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].gender === "female") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (gender === "male") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].gender === "female") {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
