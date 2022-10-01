import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { UserDto } from '../DTO/UserDTO.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userDto: UserDto;
  public error: boolean;

  constructor(private appServiceService: AppServiceService, private route: Router) {
    this.userDto = {
      username: '',
      password: '',
    };
    this.error = false;
  }

  ngOnInit(): void {}

  login() {
    this.appServiceService.login(this.userDto).subscribe((res) => {
      if (res === null) {
        this.error = true;
      } else {
        localStorage.setItem('user', JSON.stringify(res));
        this.route.navigate(['/items-list']);
      }
    });
  }
}
