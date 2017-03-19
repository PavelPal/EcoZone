import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/main/about/about.component";
import { HomeComponent } from "./components/main/home/home.component";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { AdminComponent } from "./components/admin/admin.component";
import { MainComponent } from "./components/main/main.component";
import { ErrorComponent } from "./components/error/error.component";
import { SettingsComponent } from "./components/admin/settings/settings.component";
import { UsersComponent } from "./components/admin/users/users.component";

const appRoutes: Routes = [
    {path: '', component: MainComponent, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'about', component: AboutComponent}
    ]},
    {path: 'admin', component: AdminComponent, children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'users', component: UsersComponent},
        {path: 'settings', component: SettingsComponent}
    ]},
    {path: 'error', component: ErrorComponent},
    {path: '**', redirectTo: 'error'}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});