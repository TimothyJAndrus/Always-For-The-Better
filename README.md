![Banner Image](/src/assets/img/mentoring.jpg)
# Always For The Better
 [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)

## Short Description
> Epicodus Javascript Project using AngularJS, Node.js, JavaScript, NPM, Foundation, Firebase, CSS, SCSS, and good ol' HTML. [View Site](https://always-for-the-better.firebaseapp.com)

## Long Description
Application platform where mentors and mentees can post their talents and needs so they can connect. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.


## Table of Contents
- [Sections](#sections)
  - [Install](#install)
  - [Usage](#usage)
    - [Database](#database)
  - [Known Bugs](#known-bugs)
  - [Sources](#sources)
  - [Maintainer](#maintainer)
  - [Contribute](#contribute)
  - [License](#license)

***

## Install
**All installation instructions are for macOS**

You first will need the following things properly installed on your computer.
 * [Git](https://git-scm.com/)
 * [Node.js](https://nodejs.org/) (with NPM), verified by running `node -v` and `npm -v` in the Terminal.
 * [Bower](https://bower.io/)
 * Angular
  * To install: 
      * enter `npm install angular`, then
      * `bower install angular` in the Terminal.
  * Verify installation by running `ng --version` in the Terminal.

With the above items installed you may now do the following in your terminal:
 * `git clone https://github.com/gstuart/Always-For-The-Better`
 * `cd always-for-the-better` :file_folder:
 * `npm install`, enjoy :coffee:, :beer:,  or :smoking: while waiting
 * `npm install bower`

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
 Before running the tests make sure you are serving the app via `ng serve`.

## Usage
* **Option One:** visit [Always For The Better](https://always-for-the-better.firebaseapp.com)
* **Option Two:**
  * `ng serve`
  * :eyes: app at [http://localhost:4200](http://localhost:4200) :tada:

## Database
1. Create account on [Firebase](https://firebase.google.com/) and follow the instruction for creating a remote database.
2. Create `src/app/api-keys.ts` file. Add the following code, substituting the `xxxx` with your specific Firebase credentials.
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

## Known Bugs
* :bug:= S1
* :ant:= S2
* :beetle:= S3
* _See Issues for additional details._
> :ant: User-Detail page: icons on bottom of card are non-functional.
>
> :ant: Account: anyone can access account. "As a logged in user, I would like to access my profile to edit and delete it so that as my experience and needs change they may be accurately reflected in my profile."
>
> :ant: Contact page: mail form is non-functional by design; it does not actually send an email.
>
> :beetle: Top Nav: Home link wrong color.

## Planning
1. Configuration/dependencies
  * Angular - framework that is used to create and deploy application.
  * Bootstrap - styling and containment throughout application.

2. Integration
  * app.component for navigation and page header.
  * app.module for capturing modules and dependencies.
  * animal.module for all components related to the animal.  
  * index page for homepage which contains a list of all questions.
  * animal-list.component for all things animals.
  * new-animal.component for creating a new animal object.
  * edit-animal for editing an existing animals.

   ![UX](/src/assets/img/planning1.jpg)
   ![Back End](/src/assets/img/planning2.jpg)

3. UX/UI
  * Foundation was used as the page templates and animations.

## Sources
 * [Content about mentoring](http://www.apa.org/education/grad/mentoring.aspx)
 * [Code for login and registration](http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial)
 * [Registration page](http://www.halogensoftware.com/blog/lessons-learned-in-mentoring)
 * [Home page image](http://www.changeboard.com/content/5121/mentoring-the-good-the-bad-and-the-ugly/)
 * [Login image](http://www.theptecs.com/mentoring.html)


## Maintainer
[Grace Stuart](href="https://github.com/gstuart")


## Contribute
* Questions may be submitted to gstuart.:octocat:@gmail.com.
* Pull requests accepted.
* NOTE: If editing the Readme, please conform to the [standard-readme specification](https://github.com/RichardLitt/standard-readme/blob/master/spec.md).


## License
**_[MLP License](/LICENSE.md)_** :copyright: **2017 Grace Stuart**


***

**[:top:](#always-for-the-better)**
