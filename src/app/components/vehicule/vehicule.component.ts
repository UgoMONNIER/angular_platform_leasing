import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicule',
  standalone: true,
  imports: [],
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent {
  id: number;
  marque: string;
  modele: string;
  annee: number;
  kilometrage: number;
  disponibility: boolean;
  quantite: number;
  prixLocation: number;
  typeVehicule: string; // "voiture" ou "camion"
  img: string;
  carburant: string;
  transmission: string;
  capacite: number; // Nombre de passagers ou capacité de charge
  options: string[]; // Liste des options disponibles
  historiqueEntretien: any[]; // Détails de l'historique d'entretien

  constructor() {
    // Initialisation des attributs si nécessaire
    this.id = 0;
    this.marque = '';
    this.modele = '';
    this.annee = 0;
    this.kilometrage = 0;
    this.disponibility = true;
    this.quantite = 1;
    this.prixLocation = 0;
    this.typeVehicule = 'voiture'; // Valeur par défaut pour Voiture
    this.img = '';
    this.carburant = '';
    this.transmission = '';
    this.capacite = 0;
    this.options = [];
    this.historiqueEntretien = [];
  }

  // Méthodes de gestion des véhicules
  afficherDetails(): string {
    return `Marque: ${this.marque}, Modèle: ${this.modele}, Année: ${this.annee}, Kilométrage: ${this.kilometrage}`;
  }
}
