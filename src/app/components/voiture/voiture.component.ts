import { Component } from "@angular/core";
import { VoitureService } from "../../services/voiture.service";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-voiture",
  standalone: true,
  imports: [ NgClass ],
  templateUrl: "./voiture.component.html",
  styleUrl: "./voiture.component.css"
})
export class VoitureComponent {
  voitures: any;
  hasBeenDeleted : boolean = false;

  constructor(private serviceVoiture: VoitureService) {}

  ngOnInit(): void {

    // Au montage du composant on appelle la fonctione pour recup les composants et les afficher
    this.getVoitures();

  }
  

  getVoitures() {
    this.serviceVoiture.getVoitures().subscribe(data => {
      this.voitures = data;
    });
  }

  toggleDisponibility(    
    id: number,
    disponibility: boolean
  ){
    this.serviceVoiture.toggleDisponibility(
      id,
      disponibility
    ).subscribe(
      () =>{
        this.voitures = this.getVoitures();
      }
    );
  }

  deleteVoiture(id : number){
    this.serviceVoiture.deleteVoiture(id).subscribe(() => {
      this.voitures = this.getVoitures();
    });
    this.hasBeenDeleted = true;
    setTimeout(() => {
      this.hasBeenDeleted = false;
    }, 1000);
  }
}
