import { Component, OnInit } from '@angular/core';
import { AuthUtilService } from '../login/auth-util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authUtil: AuthUtilService,private router: Router) { }

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
