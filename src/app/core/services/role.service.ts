import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { AppConfig } from '../configs/app-config';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends HttpService {

  private roles: Array<Role> = [];

  constructor(protected override appConfig: AppConfig,
              protected override httpClient: HttpClient) { 
    super(appConfig, httpClient);
    this.httpClient.get<Array<Role>>(`${this.baseUrl}${this.serviceUrl()}`)
        .subscribe(roles => {          
          this.roles = roles;
        });
  }

  protected serviceUrl(): string {
    return this.appConfig.endpoints.roles.baseUrl;
  }

  public getAllRoles(): Array<Role> {
    return this.roles;
  }

}
