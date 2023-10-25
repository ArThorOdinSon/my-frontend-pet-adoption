import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdminupdateComponent } from './adminupdate/adminupdate.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { ViewComponent } from './view/view.component';
import { UseradoptComponent } from './useradopt/useradopt.component';
import { AdoptfeedbackComponent } from './adoptfeedback/adoptfeedback.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
  { path: 'Adminupdate', component: AdminupdateComponent },
  { path: 'Adminadd', component: AdminaddComponent },
  { path: 'View', component: ViewComponent },
  { path: 'Adopt', component: UseradoptComponent },
  { path: 'AdoptFeedback', component: AdoptfeedbackComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
