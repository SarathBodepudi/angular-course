import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  title = COURSES[0].description;

  price = 9.9907897987987;

  rate = 0.67;

  course = COURSES[0];

  /*coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];*/

  onCardClicked() {
    console.log('Course Card clicked...');
  }

  onCourseSelected(course: Course) {
    console.log('Course Card clicked event build...', course);
  }

}
