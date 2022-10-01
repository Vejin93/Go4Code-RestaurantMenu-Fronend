import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { Item } from 'src/app/model/item.component';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

  items: Item[]=[];

  constructor(private appServiceService: AppServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.appServiceService.loadData().subscribe((res: Item[]) => {this.items = res});
  }

}
