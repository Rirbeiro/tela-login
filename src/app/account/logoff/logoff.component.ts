import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.onLogoff('teste');
  }

  onLogoff(name: string) {
    if (confirm(`Você realmente deseja sair ${name}?`)) {
      window.localStorage.removeItem('token');
      this.router.navigate(['']);
    }
    else {
      this.location.back();
    }
  }

}
