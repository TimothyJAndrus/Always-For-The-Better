import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'genderPipe',
  pure: false
})

export class GenderPipePipe implements PipeTransform {
  transform(input: User[], gender) {
    var output: User[] = [];

    if(gender === "Female") {
      if (input[i].gender === "Female") {
        output.push(input[i]);
      }
    } else if (gender === "Gender Neutral") {
      if (input[i].gender === "Gender Neutral") {
        output.push(input[i]);
      }
    } else if (gender === "Male") {
      if (input[i].gender === "Male") {
        output.push(input[i]);
      }
    } else {
      return input;
    }
  }
}
