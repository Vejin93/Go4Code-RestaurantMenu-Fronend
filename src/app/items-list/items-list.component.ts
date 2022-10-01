import { Component, Input, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { AppServiceService } from '../app-service.service';
import { Item } from '../model/item.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() items: Item[]=[];

  public nameCategory: String = '';

  constructor(private appServiceService: AppServiceService ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.appServiceService.loadData().subscribe((res: Item[]) => {this.items = res});
  }

  filterItems(nameCategory: String) {
    this.appServiceService.filterData(nameCategory).subscribe((res: Item[]) => (this.items = res))
    if(nameCategory==="" || null){
      this.loadData();
    }else{
      this.appServiceService.filterData(nameCategory).subscribe((res: Item[]) => (this.items = res))
    }
  }

  resetFilter(event: Event){
    this.loadData();
  }

}
