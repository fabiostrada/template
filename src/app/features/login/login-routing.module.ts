import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
