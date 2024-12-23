import { Component, importProvidersFrom } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hclsadmin';
  AnonymousFlag:boolean=false;
  SecureFlag:boolean=true;
  ManagerialFlag:boolean=false;
  OperationalFlag:boolean=true;
  

  constructor(private router: Router) {}
}
