import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from 'src/app/account';
import { AppSettings } from 'src/app/appSettings';
import { Login } from 'src/app/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  static MockBackEnd: any;

  constructor(private http: HttpClient) { }

  async login(user: Login): Promise<boolean> {
    const result = await this.http.get<Array<Login>>(`${AppSettings.API_ENDPOINT}/auth`).toPromise();

    if (result.find(x => x.email === user.email) && result.find(x => x.password === user.password)) {
      window.localStorage.setItem('token', 'my-token-mock');
      return true;
    }
    return false;
  }

  async createAccount(account: any) {
    return await this.http.post<Account>(`${AppSettings.API_ENDPOINT}/auth`, account).toPromise();
  }

  public getAuthorizationToken = () => window.localStorage.getItem('token');

}
