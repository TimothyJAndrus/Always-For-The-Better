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
      name: [''],
      title: [''],
      bio: [''],
      linkedin: [''],
      image: [''],
      gender: [''],
      mentor: [''],
      mentee: ['']
    })
    this.editUser.reset({
      name: this.selectedUser.name,
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
    var {name, title, bio, linkedin, image, gender, mentor, mentee} = this.editUser.value;
    this.userService.updateUser(userToUpdate);
  }

  beginDeletingUser(userToDelete) {
    if(confirm("Are you sure you want to delete this user?")){
      this.userService.deleteUser(userToDelete);
    }
  }
}
