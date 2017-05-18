import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', './account.component.scss'],
  providers: [UserService]
})
export class AccountComponent implements OnInit {
  newUserForm: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.newUserForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      title: ['', Validators.required],
      image: [''],
      linkedin: ['', Validators.required],
      bio: ['', Validators.required],
      gender: ['', Validators.required],
      mentor: [''],
      mentee: ['']
    })
  }

  submitForm() {
    var {username, firstName, lastName, password, title, image, linkedin, bio, gender, mentor, mentee} = this.newUserForm.value;
    if(image === "") {
      image = "../assets/img/default-image.jpg";
    }

    var newUser: User = new User(username, password, firstName, lastName, title, image, linkedin, bio, gender, mentor, mentee);
    console.log(newUser);
    this.userService.addUser(newUser);
    this.newUserForm.reset();
  }
}
