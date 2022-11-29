import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellenseiteComponent } from './tabellenseite.component';

describe('TabellenseiteComponent', () => {
  let component: TabellenseiteComponent;
  let fixture: ComponentFixture<TabellenseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellenseiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellenseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
