import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintergrundbildComponent } from './hintergrundbild.component';

describe('HintergrundbildComponent', () => {
  let component: HintergrundbildComponent;
  let fixture: ComponentFixture<HintergrundbildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HintergrundbildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintergrundbildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
