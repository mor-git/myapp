import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url :"" ;
  constructor(private http : HttpClient) { }

  save(donnes : any){
    return this.http.post(this.url,donnes);
  }
  getFilm(url : string){
    return this.http.get(url)
  }
  getDonne(): Observable <any>{
    let mystructure : any = [
      {id: 2 , type:'Banque'},
      {id: 3 , type:'Entreprise'},
      {id: 4 , type:'Societé commercial'},
      {id: 'mor', type:'Autre chose' },
    ];
    return mystructure;
  }
}
