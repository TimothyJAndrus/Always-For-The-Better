import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css'],
  providers: [UserService]
})

export class MentorComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(){
    this.users = this.userService.getUsers();
  }

  goToDetailPage(clickedUser: User) {
    this.router.navigate(['users', clickedUser.id]);
  };
}
