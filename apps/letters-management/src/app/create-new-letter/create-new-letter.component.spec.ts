import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateNewLetterComponent } from './create-new-letter.component';

describe('CreateNewLetterComponent', () => {
  let component: CreateNewLetterComponent;
  let fixture: ComponentFixture<CreateNewLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewLetterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
