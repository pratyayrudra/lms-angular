import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksBorrowedStudentsComponent } from './books-borrowed-students.component';

describe('BooksBorrowedStudentsComponent', () => {
  let component: BooksBorrowedStudentsComponent;
  let fixture: ComponentFixture<BooksBorrowedStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksBorrowedStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksBorrowedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
