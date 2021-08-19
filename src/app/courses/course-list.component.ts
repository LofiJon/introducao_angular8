import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { courseService } from './course.service';
@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    _courses: Course[] = [];

    _filterBy!: string;

    filteredCourses: Course[] = [];

    constructor(private courseService: courseService) {}

    ngOnInit(): void {
        this._courses = this.courseService.retriveAll();
        this.filteredCourses = this._courses;
    }

    set filter(value: string){
        this._filterBy = value;

        this.filteredCourses = this._courses.filter(
          (course: Course) => course.name.toLocaleUpperCase()
          .indexOf(this._filterBy.toLocaleUpperCase()) > -1);
    }

    get filter() {
      return this._filterBy;
    }

}
