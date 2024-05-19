import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

   //Login ol sayfası textbox tanımları

   public loginPassword: string = ""
   public loginNickname: string = ""
   public veriTabaniControl: boolean = false;
 
   loginForm:FormGroup;
   constructor(public fb: FormBuilder, public navCtrl: NavController, private router: Router) 
   {
     this.loginForm=fb.group({
       
       lPassword:['',Validators.compose([
         Validators.required,
       ])],
       
       lNickname:['',Validators.compose([
         Validators.required,
       ])],
     });
   }
   validation_messages = 
   {
     'lNickname': [
         { type: 'required', message: 'Lütfen kullanıcı adı giriniz.' },
       ],
 
     'lPassword': [
         { type: 'required', message: 'Lütfen şifre adı giriniz.' },
       ],
           
   }
 
   veriTabaniKontrol()
   {
     //Veri Tabanı Kontrol
 
     //veri tabanında varsa True yapıp hata mesajı gönderilecek 
     //Veri tabanında yoksa degiştirilmeyip veritabanına gönderilip işlenecek
 
     //veritabanında varsa
     if(true){
       this.veriTabaniControl=false;
     }
     // veritabanında yoksa veritabanına ekle
     else
     {
       this.veriTabaniControl=true;
     }
     if(this.veriTabaniControl)
       return false;
     else
       return true;
     
       /*
       Veri Tabanına Kayıt
       this.registerEmail
       this.registerNickname
       this.registerPassword
     */
     
     
   }
   loginButton()
   { 
     
     if(this.veriTabaniKontrol())
     {
       alert("Başarıyla giriş yaptınız.");
       this.navCtrl.navigateForward('/tabs2');
     }
     else
     {
       alert("Hata oluştu.");
       
     }
 
     this.loginNickname="";
     this.loginPassword="";
 
   }

  ngOnInit() {
  }

}
