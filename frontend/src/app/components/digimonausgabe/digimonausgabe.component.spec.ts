import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonausgabeComponent } from './digimonausgabe.component';

describe('DigimonausgabeComponent', () => {
  let component: DigimonausgabeComponent;
  let fixture: ComponentFixture<DigimonausgabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonausgabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonausgabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
