import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByGender: String = "all";

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(){
    this.users = this.userService.getUsers();
  }

  goToDetailPage(clickedUser) {
    this.router.navigate(['user', clickedUser.$key]);
  }

  onChange(gender) {
    this.filterByGender = gender;
  }

}
