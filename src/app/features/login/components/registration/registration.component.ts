import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/core/components/base.component';
import { equalPasswordValidator } from 'src/app/shared/validators/equal-password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  extends BaseComponent implements OnInit {

  public form!: FormGroup;
  public regexPassword: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';

  constructor(private formBuilder: FormBuilder) { 
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]]
      },
      { validators: equalPasswordValidator }
    );    
  }

  public register(): void {

  }

}
