import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Item } from '../model/item.component';

@Component({
  selector: 'app-filter-by-name-items',
  templateUrl: './filter-by-name-items.component.html',
  styleUrls: ['./filter-by-name-items.component.css']
})
export class FilterByNameItemsComponent implements OnInit {
  @Output() setNameItem: EventEmitter<String> = new EventEmitter();
  
  public name: string;
  public items: Item[];
  public errorMessage: string | null;


  constructor(private appServiceService: AppServiceService) {
    this.name='';
    this.items=[];
    this.errorMessage="";
  
   }

  ngOnInit(): void {
  }

  filterItems(){
    this.appServiceService.filterDataByName(this.name).subscribe((res:Item[]) => {(this.items=res)})
      this.setNameItem.emit(this.name);
    

  }

}
