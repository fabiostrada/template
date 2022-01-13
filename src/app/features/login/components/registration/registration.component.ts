import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, takeUntil, tap } from 'rxjs';
import { AppRoutings } from 'src/app/core/configs/app-routing';
import { BaseComponent } from 'src/app/core/components/base.component';
import { Exception } from 'src/app/core/models/exception';
import { Role } from 'src/app/core/models/role';
import { UserApi } from 'src/app/core/models/api/user.api';
import { RoleService } from 'src/app/core/services/role.service';
import { UserService } from 'src/app/core/services/user.service';
import { arrayNotEmptyValidator } from 'src/app/shared/validators/array-not-empty.validator';
import { equalPasswordValidator } from 'src/app/shared/validators/equal-password.validator';
import { LoginRouting } from '../../configs/login.routing';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  extends BaseComponent implements OnInit {

  public form!: FormGroup;  
  public allRoles!: Array<Role>;  

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private roleService: RoleService,
              private router: Router) { 
    super();
  }

  ngOnInit(): void {
    this.allRoles = this.roleService.getAllRolesExceptAdmin();
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
        repeatPassword: ['', [Validators.required]],
        roleFormController: ['', [arrayNotEmptyValidator()]]        
      },
      { validators: equalPasswordValidator }
    );    
  }

  public register(): void {
    this.userService.register(UserApi.build(this.form))
                    .pipe(
                      takeUntil(this.unsubscribeAll),
                      tap(() => {
                          this.router.navigate([AppRoutings.login, LoginRouting.loginSuccess]);
                      }),
                      catchError((exception: Exception) => {
                          this.error = exception;
                          return of(exception);
                      }))
                    .subscribe();
  }


}
