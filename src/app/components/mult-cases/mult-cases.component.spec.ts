import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultCasesComponent } from './mult-cases.component';

describe('MultCasesComponent', () => {
  let component: MultCasesComponent;
  let fixture: ComponentFixture<MultCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultCasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
