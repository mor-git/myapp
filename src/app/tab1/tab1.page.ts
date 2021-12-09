import { Component } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { LegumeModalComponent } from '../legume-modal/legume-modal.component';
import { ImageModalComponent } from '../image-modal/image-modal.component';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  status : String = "";
  audioFile : MediaObject;
  formgroup : FormGroup;
  hideLegumes = true;
  hideCommande= false;

  constructor(private media : Media, private file : File, public adb : AngularFireDatabase,
     private http : HttpClient,private modalCtrl : ModalController) {}

  legumes(){
    this.hideLegumes  = true;
    this.hideCommande = false;

  }
  commandes(){
    this.hideLegumes  = false;
    this.hideCommande = true;
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
        component : LegumeModalComponent
      });

      await modal.present();
  }

  async openImageModal(){
    const modal = await  this.modalCtrl.create({
        component : ImageModalComponent
      });
      
      await modal.present();
  }

  RecordAudio(){
    this.audioFile = this.media.create(this.file.externalRootDirectory+'/audiofile.mp3');
    this.audioFile.startRecord();
    this.status = "Erégistrement...";
  }
  StopRecording(){
    this.audioFile.stopRecord();
    this.status = "Stop";
  }

  ngOnInit(){
    this.formgroup = new FormGroup({
      'nom' : new FormControl('',Validators.required),
      'prenom' : new FormControl('',Validators.required),
      'adr' : new FormControl('',Validators.required)
    })
  }
  // Ajouter dans firebase le username et password
  add(){
   let khole = this.adb.list('Users').push({
      username : 'mor',
      password : 'PasserPasser'
    });

    console.log(khole);
  }
  recupe(){
    console.log(this.formgroup.value);
    console.log(this.formgroup.value.nom);
  }
  ajout(data){
    // return this.http.post(data).subscribe();
  }
}
