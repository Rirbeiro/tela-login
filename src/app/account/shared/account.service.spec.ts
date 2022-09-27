import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { AccountService } from './account.service';
import { Login } from 'src/app/login';
import { AppSettings } from 'src/app/appSettings';

describe('AccountService', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;

  const loginCorrectFromScreen: Login = {
    email: "ricardoromuloribeiro@yahoo.com.br",
    password: "123"
  };

  const loginInCorrectFromScreen: Login = {
    email: "ricardoromuloribeiro@yahoo.com.br",
    password: "111"
  };

  const loginResponse: Login[] = [{
    email: "ricardoromuloribeiro@yahoo.com.br",
    password: "111"
  }];


  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [AccountService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(AccountService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should called login method and return false', (done) => {
    service.login(loginCorrectFromScreen).then(get => {
      expect(get).toEqual(false);
      console.log(get);
      done();
    });

    let loginRequest = httpMock.expectOne(`${AppSettings.API_ENDPOINT}/auth`);
    loginRequest.flush(loginResponse);
    httpMock.verify();
  });

  it('it should called login method and return true', (done) => {
    service.login(loginInCorrectFromScreen).then(get => {
      expect(get).toEqual(true);
      console.log(get);
      done();
    });

    let loginRequest = httpMock.expectOne(`${AppSettings.API_ENDPOINT}/auth`);
    loginRequest.flush(loginResponse);
    httpMock.verify();
  });
});
