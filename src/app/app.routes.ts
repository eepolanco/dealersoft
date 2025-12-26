
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'login',
		loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
	},
	{
		path: '',
		loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
		children: [
			   {
				   path: 'dashboard',
				   loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
			   },
			   {
				   path: 'facturacion',
				   loadComponent: () => import('./facturacion/facturacion.component').then(m => m.FacturacionComponent)
			   },
			   { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
		]
	}
];
