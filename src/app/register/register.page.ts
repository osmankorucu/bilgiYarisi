import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //Kayıt ol sayfası textbox tanımları
  public registerEmail: string = ""
  public registerPassword: string = ""
  public registerNickname: string = ""
  public veriTabaniControl: boolean = false;

  //Formun tanımı
  registerForm:FormGroup;

  //Formun kontrolü için gerekli düzenlemeler
  constructor(public fb: FormBuilder, public navCtrl: NavController, private router: Router) 
  {
    this.registerForm=fb.group({
      rEmail: ['',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])],

      rPassword:['',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.maxLength(16),
      ])],
      
      rNickname:['',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ])],
    });
  }

  // Form kontrolünde hataya göre gösterilecek mesajlar
  validation_messages = 
  {
    'rNickname': [
        { type: 'required', message: 'Lütfen kullanıcı adı giriniz.' },
        { type: 'minlength', message: 'Kullanıcı adı en az 5 karakter içermelidir.' },
        { type: 'maxlength', message: 'Kullanıcı adı en fazla 16 karakter içermelidir.' },
      ],
      'rEmail': [
        { type: 'required', message: 'Lütfen E-posta adresi giriniz.' },
        { type: 'pattern', message: 'Geçersiz E-posta adresi' },
      ],
      'rPassword': [
        { type: 'required', message: 'Lütfen şifre adı giriniz.' },
        { type: 'minlength', message: 'Şifre adı en az 5 karakter içermelidir.' },
        { type: 'pattern', message: 'Şifre rakam ve harf içermelidir.' },
        { type: 'maxlength', message: 'Şifre adı en fazla 16 karakter içermelidir.' },
      ],
          
  }
  
  //Kayıt ol sayfası Button event
  
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
  registerButton()
  { 
    
    if(this.veriTabaniKontrol())
    {
      alert("Başarıyla kayıt oldunuz.");
      this.navCtrl.navigateForward('/tabs/signin');
    }
    else
    {
      alert("Hata oluştu.");
      
    }
    this.registerEmail="";
    this.registerNickname="";
    this.registerPassword="";

  }

  ngOnInit() {
  }

}
