import { Component, OnInit, Signal } from '@angular/core';
import { VehiculeComponent } from '../vehicule/vehicule.component';
import { ActivatedRoute } from '@angular/router'; 
import { VoituresService } from '../../services/voitures.service';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { TitleCasePipe, DecimalPipe, CurrencyPipe } from '@angular/common'; 


@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [TitleCasePipe , DecimalPipe, CurrencyPipe, CommonModule ],
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent extends VehiculeComponent implements OnInit {
  nombrePortes: number;
  typeCarrosserie: string; 
  voiture: any;
  numberStars = signal(0);
  indexes = [1,2,3,4,5];


  filledImageUrl: string = 'star-filled.png'; // ou 'public/star-filled.png'

  emptyImageUrl: string = 'star-empty.png'; // ou 'public/star-empty.png'
  

  constructor(
    private serviceVoitures: VoituresService,
    private route: ActivatedRoute 
  ) {
    super(); 

    this.nombrePortes = 0; 
    this.typeCarrosserie = 'berline'; 
  }

  ngOnInit(): void {
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
