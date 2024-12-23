import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActiveAdminComponent } from './active-admin/active-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MAProfileComponent } from './ManagerDetais/maprofile/maprofile.component';
import { AddOAdminComponent } from './ManagerDetais/add-oadmin/add-oadmin.component';
import { ManagerOAdminComponent } from './ManagerDetais/manager-oadmin/manager-oadmin.component';
import { OAProfileComponent } from './OperationDetails/oaprofile/oaprofile.component';
import { AddReceptionistComponent } from './OperationDetails/add-receptionist/add-receptionist.component';
import { ManageReceptionistComponent } from './OperationDetails/manage-receptionist/manage-receptionist.component';
import { AddDoctorComponent } from './OperationDetails/add-doctor/add-doctor.component';
import { ManagerDoctorComponent } from './OperationDetails/manage-doctor/manager-doctor.component';
import { AddHelperComponent } from './OperationDetails/add-helper/add-helper.component';
import { ManagerHelperComponent } from './OperationDetails/manage-helper/manager-helper.component';
import { AddLabComponent } from './OperationDetails/add-lab/add-lab.component';
import { ManagerLabComponent } from './OperationDetails/manage-lab/manager-lab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    ActiveAdminComponent,
    PageNotFoundComponent,
    MAProfileComponent,
    AddOAdminComponent,
    ManagerOAdminComponent,
    OAProfileComponent,
    AddReceptionistComponent,
    ManageReceptionistComponent,
    AddDoctorComponent,
    ManagerDoctorComponent,
    AddHelperComponent,
    ManagerHelperComponent,
    AddLabComponent,
    ManagerLabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
