import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    ngOnInit(): void {
      this.courses = [
        {
          id: 1,
          name!: "Curso angular iniciante",
          imageUrl: "",
          price!: 99,
          code!: 'ANJJ-001',
          duration!: 120,
          rating!: 5.5,
          release!: "17/08/2020"
        },
        {
          id: 2,
          name!: "Curso angular intermediario",
          imageUrl: "",
          price!: 120.50,
          code!: 'ANJJ-002',
          duration!: 120,
          rating!: 5,
          release!: "17/08/2020"
        },
        {
          id: 2,
          name!: "Curso angular avançado",
          imageUrl: "",
          price!: 200,
          code!: 'ANJJ-003',
          duration!: 200,
          rating!: 5,
          release!: "17/08/2020"
        },
      ]
    }
    courses: Course[] = [];
}
