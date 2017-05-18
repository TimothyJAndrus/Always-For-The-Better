// core requirements
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';

// components
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AccountComponent } from './account/account.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';

// guards
import { AuthGuard } from './auth.guard';

// pipes
import { GenderPipe } from './gender.pipe';

// services
import { AlertService } from './alert.service';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

// database
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    UserComponent,
    UserDetailComponent,
    AccountComponent,
    EditUserComponent,
    GenderPipe,
    JoinComponent,
    LoginComponent,
    AlertComponent,
    WelcomeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],

  providers: [AuthGuard,
              AlertService,
              AuthenticationService,
              UserService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
