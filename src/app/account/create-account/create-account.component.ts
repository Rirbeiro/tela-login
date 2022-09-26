import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/account';
import { AccountService } from '../shared/account.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account = new Account();

  constructor(private accountService: AccountService, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);
      console.log(result);
      if (result) {
        alert('Usuário criado com sucesso.');
        this.router.navigate(['']);
      }
    } catch (error) {
      console.log(error);
      alert('Falha na criação do usuário.')
    }
  }

  voltar = () =>
    this.location.back();

}
