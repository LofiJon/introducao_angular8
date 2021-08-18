import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseListComponent } from './courses/course-list.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
