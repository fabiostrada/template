import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginRouting } from './configs/login.routing';

const routes: Routes = [
    {
        path: LoginRouting.login,
        component: LoginComponent
    },
    {
        path: LoginRouting.registration,
        component: RegistrationComponent
    },
    {
        path: LoginRouting.loginSuccess,
        component: LoginSuccessComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
