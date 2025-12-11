import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Login } from '../components/login/login';
import { Dashboard } from '../components/dashboard/dashboard';
import { authGuardGuard } from '../components/guards/auth-guard-guard';
import { Lista } from '../components/lista/lista';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: Login
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuardGuard]
    },
    {
        path: 'lista',
        component: Lista,
        canActivate: [authGuardGuard]
    },


    {
        path: 'dashboard',
        loadComponent: () => import('../components/dashboard/dashboard').then(m => m.Dashboard),
        canActivate: [authGuardGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }


];
