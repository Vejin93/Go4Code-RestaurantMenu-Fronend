import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Category } from '../model/category.component';
import { Item } from '../model/item.component';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  @Input() items: Item[] = [];

  public name: String = '';

  public newItem: Item;
  public newCategory: Category;
  public categories: Category[]=[];

  @ViewChild('itemForm') form!: NgForm;
  editMode: boolean = false;

  changeCategory(e:any){
    this.newCategory = e.target.value;
  }

  constructor(private appServiceService: AppServiceService, private router: Router) {
    this.newCategory = {
      nameCategory: ''
    }

    this.newItem = {
      name: '',
      category: this.newCategory,
      price: 0
    }

    this.categories=[];
  }

  ngOnInit(): void {
    this.loadData();
    this.getAllCategory();
  }

  loadData() {
    this.appServiceService.loadData().subscribe((res: Item[]) => { this.items = res });
  }

  filterItems(name: String) {
    this.appServiceService.filterDataByName(name).subscribe((res: Item[]) => (this.items = res))
    if (name === "" || null) {
      this.loadData();
    } else {
      this.appServiceService.filterDataByName(name).subscribe((res: Item[]) => (this.items = res))
    }
  }

  deleteItem(id: number | undefined) {
    this.appServiceService.deleteItem(id).subscribe(res => {
      this.router.navigate(['edit-menu'])
      this.loadData();
    })
  }

  updateItem(id: number | undefined) {
    let items: Item[] = [];
    let currentItem = this.items.find((i) => { return i.id === id })
    this.newItem.id=currentItem?.id;
    this.newItem.name = currentItem?.name !== undefined ? currentItem?.name : '';
    this.newItem.category = currentItem?.category !== undefined ? currentItem?.category : this.newCategory;
    this.newItem.price = currentItem?.price !== undefined ? currentItem?.price : 0;
    
    console.log();

    this.editMode = true;
  }

  addItem() {
    if (!this.editMode) {
      this.appServiceService.addItem(this.newItem).subscribe((res: Item) => {
        this.newItem = res;
        this.router.navigate(['/edit-menu']);
        this.newCategory = {
          nameCategory: ''
        }

        this.newItem = {
          name: '',
          category: this.newCategory,
          price: 0
        }
        this.loadData();
      });
    }else{
      this.appServiceService.updateItem(this.newItem.id?this.newItem.id:0,this.newItem).subscribe();
    }
  }

  reset(){
    this.newCategory = {
      nameCategory: ''
    }

    this.newItem = {
      name: '',
      category: this.newCategory,
      price: 0
    }

    this.loadData();
  }

  getAllCategory(){
    this.appServiceService.getAllCategory().subscribe((res=>this.categories=res))
    // console.log(this.categories)
  }

}
