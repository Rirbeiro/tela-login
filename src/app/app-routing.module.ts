import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthGuard } from './account/shared/auth.guard';
import { LogoffComponent } from './account/logoff/logoff.component';


// Entra na rota vazia e olha primeiro o "canActivate", e verifica se pode entrar na rota "AuthGuard", senão consegue vai para próxima e mostra a tela de autenticação
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:
      [
        { path: '', component: TaskListComponent },
        { path: 'new', component: TaskFormComponent },
        { path: 'edit/:id', component: TaskFormComponent }
      ],
    canActivate: [AuthGuard]
  },
  {
    path: '', component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'logoff', component: LogoffComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
