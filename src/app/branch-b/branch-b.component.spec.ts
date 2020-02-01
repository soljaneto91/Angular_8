import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchBComponent } from './branch-b.component';

describe('BranchBComponent', () => {
  let component: BranchBComponent;
  let fixture: ComponentFixture<BranchBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
