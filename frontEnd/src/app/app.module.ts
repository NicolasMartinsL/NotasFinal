import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule} from "./layouts";
import {AppInfoService, AuthService, ScreenService} from "./shared/services";
import {ChangePasswordFormModule, CidadeEstadoModule, CreateAccountFormModule, FooterModule, LoginFormModule, ResetPasswordFormModule} from "./shared/components";
import {UnauthenticatedContentModule} from "./unauthenticated-content";
import {DxDataGridModule, DxSelectBoxModule} from "devextreme-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    DxSelectBoxModule,
    DxDataGridModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
