import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  @Input() selectedUser;
  editUser: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.editUser = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      username: [''],
      password: [''],
      title: [''],
      bio: [''],
      linkedin: [''],
      image: [''],
      gender: [''],
      mentor: [''],
      mentee: ['']
    })
    this.editUser.reset({
      firstName: this.selectedUser.firstName,
      lastName: this.selectedUser.lastName,
      email: this.selectedUser.email,
      username: this.selectedUser.username,
      password: this.selectedUser.password,
      title: this.selectedUser.title,
      bio: this.selectedUser.bio,
      linkedin: this.selectedUser.linkedin,
      image: this.selectedUser.image,
      gender: this.selectedUser.gender,
      mentor: this.selectedUser.mentor,
      mentee: this.selectedUser.mentor
    })
  }

  beginUpdatedUser(userToUpdate) {
    this.userService.updateUser(userToUpdate);
  }

  beginDeletingUser(userToDelete) {
    if(confirm("Are you sure you want to delete this user?")){
      this.userService.deleteUser(userToDelete);
    }
  }
}
