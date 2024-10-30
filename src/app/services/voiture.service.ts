import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http : HttpClient) { 

  }

  public getVoitures() {
    const url = "http://localhost:3000/voitures";
    return this.http.get(url);
  }

  public deleteVoiture(id : number) {
    console.log(id);
    
    const url = "http://localhost:3000/voitures/" +id;
    
    return this.http.delete(url);
  }
  
}
