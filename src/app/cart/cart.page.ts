import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private router:Router,
              public ngFireAuth: AngularFireAuth,
             ) { }

  ngOnInit() {
  }
  async search(){
    this.router.navigate(['/search']);
  }
  async main(){
    this.router.navigate(['/main']);
  }
  async about(){
    this.router.navigate(['/about']);
  }
  async photo(){
    this.router.navigate(['/photo']);
  }

  async home(){
    this.router.navigate(['/home']);
  }
}
