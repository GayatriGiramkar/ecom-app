import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {


  constructor(private router:Router,
    public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async signin(){

      this.router.navigate(['/login']);
    }
    async signup(){

      this.router.navigate(['/signup']);
    }
    async home(){

      this.router.navigate(['/home']);
    }
 
}
