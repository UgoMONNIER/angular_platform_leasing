import { Component } from "@angular/core";
import { VoituresService } from "../../services/voitures.service";
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-voitures",
  standalone: true,
  imports: [ NgClass, RouterLink ],
  templateUrl: "./voitures.component.html",
  styleUrl: "./voitures.component.css"
})
export class VoituresComponent {
  voitures: any;
  hasBeenDeleted : boolean = false;

  constructor(private serviceVoitures: VoituresService) {}

  ngOnInit(): void {

    // Au montage du composant on appelle la fonctione pour recup les composants et les afficher
    this.getVoitures();

  }
  

  getVoitures() {
    this.serviceVoitures.getVoitures().subscribe(data => {
      this.voitures = data;
    });
  }

  toggleDisponibility(    
    id: number,
    disponibility: boolean
  ){
    this.serviceVoitures.toggleDisponibility(
      id,
      disponibility
    ).subscribe(
      () =>{
        this.voitures = this.getVoitures();
      }
    );
  }

  deleteVoiture(id : number){
    this.serviceVoitures.deleteVoiture(id).subscribe(() => {
      this.voitures = this.getVoitures();
    });
    this.hasBeenDeleted = true;
    setTimeout(() => {
      this.hasBeenDeleted = false;
    }, 1000);
  }
}
