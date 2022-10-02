import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  public logged: boolean;
  
  constructor(private appServiceService: AppServiceService) {
    localStorage.getItem('user') === null
      ? (this.logged = false)
      : (this.logged = true);
   }

  ngOnInit(): void {
    this.appServiceService.editUser(localStorage.getItem('user'));
  }

}
