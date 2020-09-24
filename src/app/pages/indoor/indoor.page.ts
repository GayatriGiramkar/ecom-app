import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.page.html',
  styleUrls: ['./indoor.page.scss'],
})
export class IndoorPage implements OnInit {

  constructor(private router:Router,
    public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async home(){
    this.router.navigate(['/home']);
  }

}
