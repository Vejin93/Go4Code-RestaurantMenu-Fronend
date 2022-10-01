import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Category } from '../model/category.component';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css']
})
export class FilterItemsComponent implements OnInit {
  @Output() setNameCategory: EventEmitter<String> = new EventEmitter();
  
  public nameCategory: string;
  public categories: Category[];
  public errorMessage: string | null;


  constructor(private appServiceService: AppServiceService) {
    this.nameCategory='';
    this.categories=[];
    this.errorMessage="";
  
   }

  ngOnInit(): void {
  }

  filterItems(){
    this.appServiceService.getAllCategory().subscribe((res:Category[]) => {(this.categories=res)})
    // console.log(this.categories);
    // let counter: number=0;
    // for(let i=0; i<this.categories.length;i++){
    //   if(this.categories[i].nameCategory===this.nameCategory){
    //     counter++;
    //   }
    // }
    // if(counter>0){
      this.setNameCategory.emit(this.nameCategory);
    // }else{
    //   alert("Category does not exist!")
    // }

  }
}
