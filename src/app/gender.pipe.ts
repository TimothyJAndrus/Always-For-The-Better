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
    } else if (gender === "Female") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].gender === "Female") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (gender === "Neutral") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].gender === "Neutral") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (gender === "Male") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].gender === "Male") {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
