import { Routes } from '@angular/router';
import { CamionComponent } from './components/camion/camion.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const routes: Routes = [
    { path: '', component: VoitureComponent },
    { path: 'voiture', component: VoitureComponent },
    { path: 'vehicule', component: VehiculeComponent },
    { path: 'camion', component: CamionComponent },
    { path: '**', component: PageNotFoundComponent }
];
