import { StudentBookDetailsComponent } from './student-book-details/student-book-details.component';
import { AdminAddBookComponent } from './admin-add-book/admin-add-book.component';
import { AdminBookDetailsComponent } from './admin-book-details/admin-book-details.component';
import { AdminStudentDetailsComponent } from './admin-student-details/admin-student-details.component';
import { AdminAddStudentComponent } from './admin-add-student/admin-add-student.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { BooksBorrowedStudentsComponent } from './books-borrowed-students/books-borrowed-students.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from './welcome/welcome.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


const appRoutes: Routes = [
    {
        path: "",
        component: WelcomeComponent,
    },
    {
        path: "welcome",
        component: WelcomeComponent,
    },
    {
        path: "adminlogin",
        component: AdminLoginComponent,
    },
    {
        path: "studentlogin",
        component: StudentLoginComponent
    },
    {
        path: "admindashboard",
        component: AdminHomeComponent
    },
    {
        path: "studentdashboard",
        component: StudentHomeComponent
    },
    {
        path: "studentdashboard/home",
        component: StudentHomeComponent
    },
    {
        path: "studentdashboard/allbooks",
        component: AllBooksComponent
    },
    {
        path: "studentdashboard/booksborrowed",
        component: BooksBorrowedStudentsComponent
    },
    {
        path: "admindashboard/allbooks",
        component : AdminBookComponent
    },
    {
        path: "admindashboard/allstudents",
        component : AdminStudentComponent
    },
    {
        path: "admindashboard/addstudent",
        component : AdminAddStudentComponent
    },
    {
        path: "admindashboard/allstudents/studentdetails",
        component : AdminStudentDetailsComponent
    },
    {
        path: "admindashboard/allbooks/bookdetails",
        component : AdminBookDetailsComponent
    },
    {
        path: "admindashboard/addbook",
        component : AdminAddBookComponent
    },
    {
        path: "studentdashboard/allbooks/bookdetails",
        component : StudentBookDetailsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}