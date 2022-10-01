import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByNameItemsComponent } from './filter-by-name-items.component';

describe('FilterByNameItemsComponent', () => {
  let component: FilterByNameItemsComponent;
  let fixture: ComponentFixture<FilterByNameItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByNameItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByNameItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
