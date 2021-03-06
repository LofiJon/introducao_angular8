import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from './course';
import { courseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course | undefined;

  constructor(private activatedRoute: ActivatedRoute, private courseService: courseService) { }

  ngOnInit(): void {
    let subscribe: any;
    // @ts-ignore
    ({subscribe} = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')));
    subscribe({
      next: (course: Course) => this.course = course,
      error: (err: any) => console.log('Error', err)
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: (course: any) => console.log('Saved with success', course),
      error: (err: any) => console.log('Error', err)
    });
  }

}
