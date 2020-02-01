import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchAComponent } from './branch-a.component';

describe('BranchAComponent', () => {
  let component: BranchAComponent;
  let fixture: ComponentFixture<BranchAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
