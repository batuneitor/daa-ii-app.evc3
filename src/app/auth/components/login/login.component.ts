import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../service/login/login';
import { AuthErrorCodes } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private authService = inject(Login);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  loginError: string = '';

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.loginError = '';
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password)
      .then(() => {
        this.router.navigate(['dashboard']);
      })
      .catch(error => {
        if (error.code === AuthErrorCodes.USER_DELETED) {
          this.loginError = 'El correo no está registrado.';
        } else if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
          this.loginError = 'La contraseña es incorrecta.';
        } else {
          this.loginError = 'Ocurrió un error al iniciar sesión.';
        }
      });
  }
}
