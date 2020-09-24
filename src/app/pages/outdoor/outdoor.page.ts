import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.page.html',
  styleUrls: ['./outdoor.page.scss'],
})
export class OutdoorPage implements OnInit {

  constructor(private router:Router,
    public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async home(){
    this.router.navigate(['/home']);
  }

}
