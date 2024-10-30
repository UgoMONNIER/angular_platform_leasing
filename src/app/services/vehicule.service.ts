import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http : HttpClient) { 

  }

  // creation de méthode Observable
  public getVehicules() {
    const url = "http://localhost:3000/vehicules";
    return this.http.get(url);
  }
  
}
