import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  @Input() selectedUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  // beginUpdatedUser(userToUpdate) {
  //   this.userService.updateUser(userToUpdate);
  // }
}
