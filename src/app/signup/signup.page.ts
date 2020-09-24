import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
   email: ""
   password: ""
   cpassword:""
    
  constructor(private router:Router,
    public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async main(){
    this.router.navigate(['/main']);
  }

async signup(){

  const  {email, password, cpassword} = this
  const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(email && password && cpassword){
    if(regex.test(email) && password == cpassword) {
      alert('registration successfull, click on Ok');
      this.router.navigate(['/login']);
    }
    else{
      alert('registration failed');
    }
  }
  else{
    alert('registration failed');
  }
}
}

// const  {email, password, cpassword} = this
  
// if(email && password && cpassword){
//     if (password == cpassword){
//      // alert('registration successfull, click on Ok');
//       this.router.navigate(['/login']);
//     }
//   }

// try{
//     const res = await this.ngFireAuth.signInWithEmailAndPassword(email, password);
//     console.log(res);
//     alert('registration successfull, click on Ok');
//     //  this.router.navigate(['/login']);
//   }

// catch(error){
  
//   alert('registration failed');
// }
// }
// }




  

