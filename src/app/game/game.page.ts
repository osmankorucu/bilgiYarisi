import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  public items:any;
  public buttonItem:any;
  public soru: string = "Soru 1"
  public aSikki: string = "A Şıkkısı"
  public bSikki: string = "B Şıkkısı"
  public cSikki: string = "C Şıkkısı"
  public dSikki: string = "D Şıkkısı"

  constructor(public navCtrl: NavController) {

    
   }

  ngOnInit() {
  }

}
