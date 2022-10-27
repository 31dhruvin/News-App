import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from './modules/authentication/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){


  }
  date = new Date();
  localDate: String = new Date().toLocaleString();

  title = 'Newsapp';


  constructor(public router: Router ,private auth: AuthenticationService)
  {

  }

  logout()
  {
    this.auth.deleteToken();
    this.router.navigate(['/login'])

  }
}
