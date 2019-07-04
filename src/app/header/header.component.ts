import { Component, OnInit } from '@angular/core';
import { AuthUtilService } from '../login/auth-util.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authUtil: AuthUtilService,private router: Router,iconRegistry: MatIconRegistry,sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('iconFarm', sanitizer.bypassSecurityTrustResourceUrl('assets/android-icon-72x72.png'));
   }

  ngOnInit() {
  }
  public isLogged() {
    return this.authUtil.isLogged();
  }

  public logout(){
    this.authUtil.logout();
    this.router.navigate(['']);
  }
}
