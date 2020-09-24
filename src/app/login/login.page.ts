import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: ''
  password: ''


  constructor(private router:Router,
              public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

//  async signin(){
//    const users= await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
//    console.log(users);

//    if (users.user){
//     alert('login successfull, click on Ok');
//      this.router.navigate(['/home']);
//    }
//    else 
//      alert('login failed');
//    }

async main(){
  this.router.navigate(['/main']);
}
async signin(){
  const  {email, password} = this
  
  if(email==password){
    if (email && password){
      alert('login successfull, click on Ok');
    }
  }

try{
    const res = await this.ngFireAuth.signInWithEmailAndPassword(email, password);
    console.log(res);
    alert('login successfull, click on Ok');
     this.router.navigate(['/home']);
  }

catch(error){
  alert('login failed');
}
}
}
