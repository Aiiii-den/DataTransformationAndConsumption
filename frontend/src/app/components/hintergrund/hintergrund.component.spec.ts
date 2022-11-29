import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintergrundComponent } from './hintergrund.component';

describe('HintergrundComponent', () => {
  let component: HintergrundComponent;
  let fixture: ComponentFixture<HintergrundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HintergrundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintergrundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
