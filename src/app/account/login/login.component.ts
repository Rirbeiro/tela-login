import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/login';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  isConnected: boolean = true;
  errorMessage: string = '';

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {

      const result = await this.accountService.login(this.login);

      if (result) {
        console.log(`Login efetuado: ${result}`);
        this.isConnected = true;
        //navega na rota vazia para cair na autenticação
        this.router.navigate(['']);
      } else {
        this.isConnected = false;
        this.ShowMessageDuringTime();
      }
    } catch (error) {
      console.log(error);
    }
  }

  private ShowMessageDuringTime() {
    this.errorMessage = 'Falha na autenticação.';
    setTimeout(() => {
      this.isConnected = true;
    }, 2000);
  }
}
