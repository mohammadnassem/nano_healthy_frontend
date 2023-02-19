import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaredsComponent } from './careds.component';

describe('CaredsComponent', () => {
  let component: CaredsComponent;
  let fixture: ComponentFixture<CaredsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaredsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
