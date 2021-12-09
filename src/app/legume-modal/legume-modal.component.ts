import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-legume-modal',
  templateUrl: './legume-modal.component.html',
  styleUrls: ['./legume-modal.component.scss'],
})
export class LegumeModalComponent implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {}
  fermerModal(){
      this.modalCtrl.dismiss();
  }

}
