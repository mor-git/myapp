import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicesService } from '../monServive/services.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  email : any;
  pwd : any;
  url : string = 'http://www.omdbapi.com/?i=tt3896198&apikey=ffb23b0';
  all : any = [];
  autre : any = [];
  fims : any = [];
  movieData = {
    title: '',
    date: '',
    country: ''
  };
  constructor(private serve : ServicesService, private http : HttpClient) {}

  ngOnInit() {
    this.all = this.alll();
    this.autre = this.autres();
    this.uneService('http://www.omdbapi.com/?i=tt3896198&apikey=ffb23b0').subscribe((data) => {
        console.log(data);
    });
    this.fims = this.encorsServive();
    console.log(this.fonct<number>(222));
  }

  uneService(ur : string){
    return this.http.get(ur);
  }
  // lesave(){
  //   let data = ["mor","moussa","ibou"];
  //   return this.serve.save(data).then( (res) => {
  //     console.log(res);
  //   });
  // }

  
  // test des generics avec typeScritp ne fait pas parti du projet
  fonct<f>(data : f){
      return data;
  }

  // const tab : Array<number> =  [2,4,5,6];
  // tab.pop(7);
  //Fin test des generics avec typeScritp ne fait pas parti du projet

  encorsServive(){
    return this.serve.getFilm(this.url);
  }
  // encorsServive(){
  //   return this.serve.getFilm(this.url).subscribe((datat) => {
  //     console.log(datat);
  //     this.movieData.title = datat['Title'];
  //     this.movieData.date = datat['Year'];
  //     this.movieData.country = datat['Country'];
  //     console.log(this.movieData);
  //   });
  // }
  autres(){
    return this.serve.getDonne();
  }

  alll(){
   
    let mystructure : any = [
        {id: 2 , type:'Banque'},
        {id: 3 , type:'Entreprise'},
        {id: 4 , type:'Societé commercial'},
        {id: 'mor', type:'Autre chose' },
    ];
    console.log(mystructure[3].id);
    return mystructure;
  }

}
