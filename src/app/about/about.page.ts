import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router:Router,
    public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async cart(){
    this.router.navigate(['/cart']);
  }
  async home(){
    this.router.navigate(['/home']);
  }
}
