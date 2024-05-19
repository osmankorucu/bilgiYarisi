import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public kullaniciAdi: string = "zafer"
  public ePosta: string = "zaferza123"
  public isim: string = "zafer"
  public soyadi: string = "uzun"
  public dogumTarihi: string = "30.30.30"
  public cinsiyet: string = "erkek"
  public il: string = "Ankara"

  constructor() { }

  ngOnInit() {
  }

}
