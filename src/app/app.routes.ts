import { Routes } from '@angular/router';
import { CamionComponent } from './components/camion/camion.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { VoituresComponent } from './components/voitures/voitures.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';


export const routes: Routes = [
    { path: '', component: VoituresComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'voiture/:id', component: VoitureComponent },
    { path: 'voitures', component: VoituresComponent },
    { path: 'vehicule', component: VehiculeComponent },
    { path: 'camion', component: CamionComponent },
    { path: '**', component: PageNotFoundComponent }
];
