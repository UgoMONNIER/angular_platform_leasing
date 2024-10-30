import { Component } from "@angular/core";
import { VoitureService } from "../../services/voiture.service";

@Component({
  selector: "app-voiture",
  standalone: true,
  imports: [],
  templateUrl: "./voiture.component.html",
  styleUrl: "./voiture.component.css"
})
export class VoitureComponent {
  voitures: any;

  constructor(private serviceVoiture: VoitureService) {}

  ngOnInit(): void {
    // const url = "http://localhost:3000/voitures";
    // fetch(url).then(res => res.json()).then(res => {
    //   console.log(res);
    // });

    // Au montage du composant on appelle la fonctione pour recup les composants et les afficher
    this.getVoitures();
  }
  

  getVoitures() {
    this.serviceVoiture.getVoitures().subscribe(data => {
      this.voitures = data;
    });
  }

  deleteVoiture(id : number){
    this.serviceVoiture.deleteVoiture(id).subscribe(() => {
      this.voitures = this.getVoitures();
    });

  }
}
