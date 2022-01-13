import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRouting } from 'src/app/features/login/configs/login.routing';
import { AppRoutings } from '../../configs/app-routing';
import { Credential } from '../../models/credential';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  
  constructor(public userService: UserService,
              public router: Router) { 
  }

  public logout() {
    this.userService.logout();
    this.router.navigate([AppRoutings.login, LoginRouting.login]);
  }
}
