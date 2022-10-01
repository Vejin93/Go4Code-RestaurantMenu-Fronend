import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListOneComponent } from './items-list-one.component';

describe('ItemsListOneComponent', () => {
  let component: ItemsListOneComponent;
  let fixture: ComponentFixture<ItemsListOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsListOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
