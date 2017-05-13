import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})

export class MentorComponent {
  constructor( private router: Router) {}
    users: User[];

    goToDetailPage(clickedUser: User) {
      this.router.navigate(['users', clickedUser.id]);
    }
  }
