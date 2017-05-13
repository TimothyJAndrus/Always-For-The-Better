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
    users: User[] = [
      new User("Honey Darling", "Sr. Back End Engineering Manager", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARDAAAAJDZjYzAyMjk3LTQxMGQtNDQxOC04M2IxLWU5MzBmNzkzMDJkZg.jpg", "https://www.linkedin.com/in/honeyd/", "I am a tech leader with a great attitude and an open mind. I am passionate about the developer, the customer, the experience, and the delight of building and using revolutionary software. My experience is strongly rooted in programming and system engineering. Ask me anything about monoliths, platforms, APIs, microservices, persistence, languages, frameworks, mobile, and devops, and it is quite possible that I will have an answer of value. I tend to lean toward the sharp edge of new technology. I love my team! Deeply committed to the success of every individual, I am quick to recognize opportunities for collaboration, professional development, and creativity. I am passionate about communication, tight feedback, and processes that free developers to make autonomous decisions.", true, true, 1),
      new User("Brett Tramposh", "Sr. Software Development Manager", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdSAAAAJGM3ZjgwNzY2LWUwY2ItNDNlZS04YjI1LTI2Y2IxN2U4MjZmNQ.jpg", "https://www.linkedin.com/in/bretttr/", "Motivated, creative and versatile technology leader with experience managing a diverse workforce to deliver multiple software applications and products on time, on budget, and with superior quality. Recipient of multiple awards for leadership and innovation. Expert in building geographically dispersed engineering teams in the US, UK, Canada, China, Ireland, and India. Able to analyze problems, develop and simplify processes, and find new solutions for more efficient workflow and development practices. Quality is the foundation that we build our agile practices upon. The phrase 'everyone owns quality' is a difficult thing to master even in agile development. It can and should be done that way, but it takes strong leadership and coaching to help form the habits and to teach each member their role to achieve it. Too many teams continue to 'throw it over a wall'​ and begin the testing cycles too late in a sprint, putting their delivery schedules in jeopardy. Teams that focus on continuous testing and test automation practices will find that quality will become the foundation of on-time delivery that delights the customer.", true, false, 2),
      new User("Jahan Walsh", "Java Developer", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAt1AAAAJDZjZTU3MDA1LTc3N2YtNDgwNC04MTEwLWY0ZmRkMzU1MmI4MA.jpg", "https://www.linkedin.com/in/jahanwalsh/", null, false, true, 3),
      new User("Gloria Friesen", "Java Developer", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqVAAAAJDYyNTI3YTQzLWE3YzktNGY4OC05NDVhLTFmMTA2M2NhZjg2OA.jpg", "https://www.linkedin.com/in/gloria-friesen-66b14012a/", null, false, true, 4),
      new User("Stormi Hoebelheinrich", "Web Developer and UX Designer", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAuPAAAAJGExNGE3ZjgwLTQ4MTEtNDQ1YS04YmJkLTE2YTUzMTVkMDkwMQ.jpg", "https://www.linkedin.com/in/shoebelheinrich/", "I am a developer who has also managed a coffee roastery, earned a bachelor’s degree in economics, and practiced martial arts for over a decade. I might just be the caffeinated, efficiency-minded ninja your organization is looking for. I am passionate about civic engagement especially as it pertains to equity, economic empowerment, and the environment.", false, true, 5)
    ];

    goToDetailPage(clickedUser: User) {
      this.router.navigate(['users', clickedUser.id]);
    }
  }
