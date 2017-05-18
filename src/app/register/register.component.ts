import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { UserService } from '../user.service';

@Component({
    moduleId: module.id,
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.addUser(this.model)
          .then(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                console.log(data);
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/account']);
            })
          .catch(
            error => {
                // this.alertService.error(error);
                console.log(error);
                this.loading = false;
            });
    }
}
