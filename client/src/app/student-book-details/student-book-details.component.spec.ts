import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBookDetailsComponent } from './student-book-details.component';

describe('StudentBookDetailsComponent', () => {
  let component: StudentBookDetailsComponent;
  let fixture: ComponentFixture<StudentBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
