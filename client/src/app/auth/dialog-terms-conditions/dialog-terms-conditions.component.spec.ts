import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTermsConditionsComponent } from './dialog-terms-conditions.component';

describe('DialogTermsConditionsComponent', () => {
  let component: DialogTermsConditionsComponent;
  let fixture: ComponentFixture<DialogTermsConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTermsConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
