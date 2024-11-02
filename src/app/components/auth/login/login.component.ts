import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importer les modules nécessaires
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]] // Validation du mot de passe
    });
  }

  

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Veuillez vérifier les informations saisies.';
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        if (typeof response === 'string') {
          this.errorMessage = response;
        } else {
          console.log('User login successful:', response);
          if (response.id) {
            // Mettre à jour le statut de l'utilisateur
            this.authService.updateUserStatus(response.id, 'connected').subscribe({
              next: (updatedUser) => {
                console.log('User status updated:', updatedUser);
                this.router.navigate(['/dashboard']); // Redirection vers le dashboard
              },
              error: (err) => {
                console.error('Error updating user status:', err);
                this.errorMessage = 'Erreur lors de la mise à jour du statut.';
              }
            });
          }
        }
      },
      error: (err) => {
        console.error('Unexpected error:', err);
        this.errorMessage = 'Une erreur inattendue est survenue.';
      }
    });
  }
}
