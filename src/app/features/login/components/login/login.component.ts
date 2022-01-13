import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, takeUntil, tap } from 'rxjs';
import { Credential } from 'src/app/core/models/credential';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { BaseComponent } from 'src/app/core/components/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { 
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
        {
          username: ['', [Validators.required]],
          password: ['', [Validators.required]]
        }
    );
  }

  public submit(): void {
    this.userService.login(Credential.of(this.form))   
                    .pipe(          
                      takeUntil(this.unsubscribeAll),            
                      tap((user: User) => {                        
                        this.router.navigate(['/']);
                      }),
                      catchError(exception => {
                        this.error = exception;
                        return of(exception);
                    })).subscribe();
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
