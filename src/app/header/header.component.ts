import { Component, OnInit } from '@angular/core';
import { AuthUtilService } from '../login/auth-util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authUtil: AuthUtilService) { }

  ngOnInit() {
  }
  public isLogged() {
    return this.authUtil.isLogged();
  }

  public logout(){
    this.authUtil.logout();
    
  }
}
