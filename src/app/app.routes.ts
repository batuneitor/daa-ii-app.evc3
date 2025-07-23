import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)},
  { path: 'auth', loadChildren: () => import('./auth/routes').then(m => m.AUTH_ROUTES)},
  { path: '**', redirectTo: '' } 
];