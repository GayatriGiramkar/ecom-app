import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  photos = this.photoService.photos;

  constructor(public photoService: PhotoService,
    public ngFireAuth: AngularFireAuth,
    private router:Router) { }

 
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
    
  }

  ngOnInit() {
  }
  async cart(){
    this.router.navigate(['/cart']);
  }
  async home(){
    this.router.navigate(['/home']);
  }
}
