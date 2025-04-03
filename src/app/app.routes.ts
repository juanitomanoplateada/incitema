import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', children: authRoutes },
  { path: 'dashboard', component: DashboardComponent },
];
