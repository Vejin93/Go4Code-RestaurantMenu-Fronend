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
  public categories: Category[] = [];
  public selectedCategory: Category|null = null;

  @ViewChild('itemForm') form!: NgForm;
  editMode: boolean = false;

  // changeCategory(e: any) {
  //   this.newCategory = e.target.value;
  // }

  constructor(private appServiceService: AppServiceService, private router: Router) {
    this.newCategory = {
      nameCategory: ''
    }

    this.newItem = {
      name: '',
      category: this.newCategory,
      price: 0
    }

    this.categories = [];
  }

  ngOnInit(): void {
    this.loadData();
    this.getAllCategory();
  }

  public myComponentVariableName: string = 'Create';


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

  onChange(event: any){
    console.log(event);
    this.selectedCategory=event.value;
    console.log(this.selectedCategory);
    if(this.editMode){
      
    }
  }

  updateItem(id: number | undefined) {
    let items: Item[] = [];
    let currentItem = this.items.find((i) => { return i.id === id })
    if(currentItem){
      this.newItem=currentItem;
      this.selectedCategory=this.newItem.category;
      // console.log(this.selectedCategory);
    }

    this.appServiceService.updateItem(this.newItem.id as number, this.newItem).subscribe((res)=>this.newItem=res)

    this.loadData();
    console.log();

    this.editMode = true;
  }

  addItem() {
    if (!this.editMode) {
    this.appServiceService.addItem(this.newItem).subscribe((res: Item) => {
        this.newItem = res;
        this.router.navigate(['/edit-menu']);
        this.newCategory=this.selectedCategory!;

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
  

  reset() {
    this.editMode = false;
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

  getAllCategory() {
    this.appServiceService.getAllCategory().subscribe((res => this.categories = res))
  }


}
