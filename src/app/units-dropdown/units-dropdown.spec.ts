import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsDropdown } from './units-dropdown';

describe('UnitsDropdown', () => {
  let component: UnitsDropdown;
  let fixture: ComponentFixture<UnitsDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitsDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
