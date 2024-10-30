import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  constructor(private http : HttpClient) { 
  }

  public getCamions() {
    const url = "http://localhost:3000/camions";
    return this.http.get(url);
  }
  
}
