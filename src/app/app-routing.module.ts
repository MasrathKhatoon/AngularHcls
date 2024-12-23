import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActiveAdminComponent } from './active-admin/active-admin.component';
import { MAProfileComponent } from './ManagerDetais/maprofile/maprofile.component';
import { AddOAdminComponent } from './ManagerDetais/add-oadmin/add-oadmin.component';
import { ManagerOAdminComponent } from './ManagerDetais/manager-oadmin/manager-oadmin.component';
import { AddDoctorComponent } from './OperationDetails/add-doctor/add-doctor.component';
import { AddHelperComponent } from './OperationDetails/add-helper/add-helper.component';
import { AddLabComponent } from './OperationDetails/add-lab/add-lab.component';
import { AddReceptionistComponent } from './OperationDetails/add-receptionist/add-receptionist.component';
import { ManagerDoctorComponent } from './OperationDetails/manage-doctor/manager-doctor.component';
import { ManagerHelperComponent } from './OperationDetails/manage-helper/manager-helper.component';
import { ManagerLabComponent } from './OperationDetails/manage-lab/manager-lab.component';
import { ManageReceptionistComponent } from './OperationDetails/manage-receptionist/manage-receptionist.component';
import { OAProfileComponent } from './OperationDetails/oaprofile/oaprofile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:'full'},  //DEFAULT ROUTE
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"activateadmin", component:ActiveAdminComponent},  
  {path:"maprofile", component:MAProfileComponent},
  {path:"addoadmin", component:AddOAdminComponent},
  {path:"manageoadmin", component:ManagerOAdminComponent},
  {path:"adddoctor", component:AddDoctorComponent},
  {path:"addhelper", component:AddHelperComponent},
  {path:"addlab", component:AddLabComponent},
  {path:"addrecepnist", component:AddReceptionistComponent},
  {path:"managedoctor", component:ManagerDoctorComponent},
  {path:"managehelper", component:ManagerHelperComponent},
  {path:"managelab", component:ManagerLabComponent},
  {path:"managerecepnist", component:ManageReceptionistComponent},
  {path:"oaprofile", component:OAProfileComponent},
  {path:"**", component:PageNotFoundComponent} ,  //wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
