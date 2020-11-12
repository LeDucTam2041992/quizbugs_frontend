import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './core/auth.guard';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {AdminGuard} from "./core/admin.guard";
import {LoginGuard} from "./core/login.guard";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AdminGuard]
    },
    {
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
        canActivate: [LoginGuard]
    },
    {
        path: '',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
