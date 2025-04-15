import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumStrComponent } from './num-str.component';

describe('NumStrComponent', () => {
  let component: NumStrComponent;
  let fixture: ComponentFixture<NumStrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumStrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumStrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
