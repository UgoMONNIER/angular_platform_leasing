import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { VoituresComponent } from "../components/voitures/voitures.component";

@Injectable({
  providedIn: "root"
})
export class VoituresService {
  private baseUrl = "http://localhost:3000/voitures"; // URL de base pour votre API

  constructor(private http: HttpClient) {}

  public getVoitures() {
    return this.http.get(this.baseUrl);
  }

  public getVoitureById(id: number){
    
    const url = `${this.baseUrl}/${id}`; // Construction de l'URL pour récupérer la voiture par ID
    
    return this.http.get(url);
  }

  public deleteVoiture(id: number) {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete(url);
  }

  public toggleDisponibility(
    id: number,
    disponibility: boolean
  ) {
    const url = `${this.baseUrl}/${id}`;

    return this.http.patch(url, {"disponibility" : !disponibility});
  }
}
