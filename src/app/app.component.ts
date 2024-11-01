import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { VoituresComponent } from './components/voitures/voitures.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CamionComponent } from './components/camion/camion.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
