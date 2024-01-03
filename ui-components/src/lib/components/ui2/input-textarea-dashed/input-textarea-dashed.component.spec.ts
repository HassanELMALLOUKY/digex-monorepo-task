import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextareaDashedComponent } from './input-textarea-dashed.component';

describe('InputTextareaDashedComponent', () => {
  let component: InputTextareaDashedComponent;
  let fixture: ComponentFixture<InputTextareaDashedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextareaDashedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextareaDashedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
