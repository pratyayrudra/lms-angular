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