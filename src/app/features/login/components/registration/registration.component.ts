import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/core/components/base.component';
import { Role } from 'src/app/core/models/role';
import { RoleService } from 'src/app/core/services/role.service';
import { UserService } from 'src/app/core/services/user.service';
import { arrayNotEmptyValidator } from 'src/app/shared/validators/array-not-empty.validator';
import { equalPasswordValidator } from 'src/app/shared/validators/equal-password.validator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  extends BaseComponent implements OnInit {

  public form!: FormGroup;
  public regexPassword: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
  public allRoles!: Array<Role>;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private roleService: RoleService) { 
    super();
  }

  ngOnInit(): void {
    this.allRoles = this.roleService.getAllRoles();
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]],
        roleFormController: ['', [arrayNotEmptyValidator()]]        
      },
      { validators: equalPasswordValidator }
    );    
  }

  public register(): void {
    console.log(this.form);
  }

}
