import {TasksComponent} from "./pages/tasks/tasks.component";
import {DxButtonModule} from "devextreme-angular/ui/button";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {ChangePasswordFormComponent, CreateAccountFormComponent, LoginFormComponent, ResetPasswordFormComponent} from "./shared/components";
import {DxFormModule} from "devextreme-angular/ui/form";
import {ProfileComponent} from "./pages/profile/profile.component";
import {NgModule} from "@angular/core";
import {AuthGuardService} from "./shared/services";
import {
    DxDataGridModule,
    DxListModule,
    DxScrollViewModule,
    DxTextAreaModule,
    DxTextBoxModule
} from "devextreme-angular";
import {PrincipalComponent} from "./pages/principal/principal.component";
import {CidadeEstadoModule} from "./shared/components/cidadeestado/cidade-estado.component";
import {CadClienteComponent} from "./pages/CadastroCliente/cadCliente.component";
import {CadProdutoComponent} from "./pages/CadastroProduto/cadProduto.component";
import {CadNotaFiscalComponent} from "./pages/CadastroNotaFiscal/cadNotaFiscal.component";




const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent,
  },
  {
    path: 'CadastroNotaFiscal',
    component: CadNotaFiscalComponent,
  },
  {
    path: 'CadastroProdutos',
    component: CadProdutoComponent,
  },
  {
    path: 'CadastroCliente',
    component: CadClienteComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true}),
        DxDataGridModule,
        DxFormModule,
        DxButtonModule,
        CidadeEstadoModule, DxScrollViewModule, DxTextBoxModule, DxTextAreaModule, DxListModule
    ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    PrincipalComponent,
    CadClienteComponent,
    CadNotaFiscalComponent,
    CadProdutoComponent
  ]
})
export class AppRoutingModule { }
