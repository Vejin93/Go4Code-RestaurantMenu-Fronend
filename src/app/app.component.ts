import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  public logged: boolean;


  constructor(private appServiceService: AppServiceService) {
    this.logged = false;
  }

  ngOnInit() {
    this.appServiceService.cast.subscribe((res) =>
      res != null ? (this.logged = true) : (this.logged = false)
    );
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.getItem('user') !== null
      ? (this.logged = true)
      : (this.logged = false);
  }
}
