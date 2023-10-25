import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdminupdateComponent } from './adminupdate/adminupdate.component';
import { ViewComponent } from './view/view.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { UseradoptComponent } from './useradopt/useradopt.component';
import { AdoptfeedbackComponent } from './adoptfeedback/adoptfeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    AdminupdateComponent,
    ViewComponent,
    AdminaddComponent,
    UseradoptComponent,
    AdoptfeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
