import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDinComponent } from './lista-din.component';

describe('ListaDinComponent', () => {
  let component: ListaDinComponent;
  let fixture: ComponentFixture<ListaDinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
