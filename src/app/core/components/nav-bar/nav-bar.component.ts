import { Component } from '@angular/core';
import { Credential } from '../../models/credential';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  
  constructor(public userService: UserService) { 
    /*
    this.userService.login(new Credential('orsobruno', 'xxxx')).subscribe(console.log);
    */
  }

}
