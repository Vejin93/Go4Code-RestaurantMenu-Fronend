import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../model/category.component';
import { Item } from '../model/item.component';

@Component({
  selector: 'app-items-list-one',
  templateUrl: './items-list-one.component.html',
  styleUrls: ['./items-list-one.component.css']
})
export class ItemsListOneComponent implements OnInit {
  @Input() item: Item;
  @Input() index: number = -1;
  private category: Category;

  constructor() {
    this.category = {
      nameCategory: ""
    }

    this.item = {
      name: "",
      category: this.category,
      price: 0
    }
   }

  ngOnInit(): void {
  }

}
