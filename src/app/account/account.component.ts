import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', './account.component.scss'],
  providers: [UserService]
})
export class AccountComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitForm(name: string, title: string, image: string, linkedin: string, bio: string, mentor: boolean, mentee: boolean) {
    if(image === "") {
      image = "../assets/img/default-image.jpg";
    }
    
    var newUser: User = new User(name, title, image, linkedin, bio, mentor, mentee);
    this.userService.addUser(newUser);
  }
}
