import { Component, OnInit } from '@angular/core';
import { VehiculeComponent } from '../vehicule/vehicule.component';
import { ActivatedRoute } from '@angular/router'; // Import d'ActivatedRoute
import { VoituresService } from '../../services/voitures.service';
import { CommonModule } from '@angular/common';
import { TitleCasePipe, DecimalPipe, CurrencyPipe } from '@angular/common'; 


@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [TitleCasePipe , DecimalPipe, CurrencyPipe, CommonModule ],
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent extends VehiculeComponent implements OnInit {
  nombrePortes: number; // Propriété spécifique aux voitures
  typeCarrosserie: string; // Propriété spécifique aux voitures (ex: berline, coupé)
  voiture: any; // Propriété pour stocker les détails de la voiture

  constructor(
    private serviceVoitures: VoituresService,
    private route: ActivatedRoute // Injection d'ActivatedRoute
  ) {
    super(); // Appelle le constructeur de la classe parente

    this.nombrePortes = 0; // Valeur par défaut
    this.typeCarrosserie = 'berline'; // Valeur par défaut

  }

  ngOnInit(): void {
    // Récupération de l'ID depuis les paramètres de la route
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const parsedId = parseInt(id, 10);
      
      if (!isNaN(parsedId)) {
        this.getVoiture(parsedId);
      } else {
        console.error('Invalid ID:', id);
      }
    }
  }

  afficherDetailsVoiture(): string {
    return `${this.afficherDetails()}, Nombre de portes: ${this.nombrePortes}, Type de carrosserie: ${this.typeCarrosserie}`;
  }

  getVoiture(id: number) {
    this.serviceVoitures.getVoitureById(id).subscribe(data => {
      this.voiture = data;
    });
  }

  getOptions(): [string, boolean][] {
    return Object.entries(this.voiture.options);
  }
}
