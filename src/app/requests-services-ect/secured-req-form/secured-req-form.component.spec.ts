import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredReqFormComponent } from './secured-req-form.component';

describe('SecuredReqFormComponent', () => {
  let component: SecuredReqFormComponent;
  let fixture: ComponentFixture<SecuredReqFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuredReqFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredReqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
