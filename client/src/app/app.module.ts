import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import {MdToolbarModule, MdMenuModule, MdGridListModule, MdListModule, MdIconModule, MdCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BooksBorrowedStudentsComponent } from './books-borrowed-students/books-borrowed-students.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { AdminAddStudentComponent } from './admin-add-student/admin-add-student.component';
import { AdminAddBookComponent } from './admin-add-book/admin-add-book.component';
import { AdminBookDetailsComponent } from './admin-book-details/admin-book-details.component';
import { AdminStudentDetailsComponent } from './admin-student-details/admin-student-details.component';
import { StudentBookDetailsComponent } from './student-book-details/student-book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    AdminHomeComponent,
    StudentHomeComponent,
    AllBooksComponent,
    BooksBorrowedStudentsComponent,
    AdminBookComponent,
    AdminStudentComponent,
    AdminAddStudentComponent,
    AdminAddBookComponent,
    AdminBookDetailsComponent,
    AdminStudentDetailsComponent,
    StudentBookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdMenuModule,
    MdListModule,
    MdIconModule,
    MdCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
