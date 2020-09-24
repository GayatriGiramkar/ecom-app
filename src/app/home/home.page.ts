import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
  import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  constructor(private router:Router,
    public ngFireAuth: AngularFireAuth,
    private menu: MenuController) { }

    slideOpts={
      loop:true
    };
    slidesDidLoad(slides:IonSlides){
      slides.startAutoplay();
    }

    ngOnInit() {
    }

    async main(){
      this.router.navigate(['/main']);
    }

    async cart(){
      this.router.navigate(['/cart']);
    }

    async search(){
      this.router.navigate(['/search']);
    }
//     async about(){
//       this.router.navigate(['/about']);
//     }

//  async photo(){
//   this.router.navigate(['/photo']);
// }
}
