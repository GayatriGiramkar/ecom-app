import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  constructor(private router:Router,
              public ngFireAuth: AngularFireAuth,
             ) { }

  ngOnInit() {
  }
  async home(){
                this.router.navigate(['/home']);
              }
}
