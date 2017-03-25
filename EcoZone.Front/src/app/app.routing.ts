import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent, HomeComponent, AboutComponent, MoreComponent } from './components/main/main';
import { NewsContainerComponent, NewsComponent } from './components/news/news';
import {
    ArticleComponent, SimpleArticleListComponent, ManageArticleComponent, AddArticleComponent, EditArticleComponent
} from './components/article/article';
import { AdminComponent, DashboardComponent, SettingsComponent } from './components/admin/admin';
import { SubscribersComponent } from './components/subscribe/subscribe';
import { UsersComponent, ManageUserComponent, AddUserComponent, UserComponent, EditUserComponent } from './components/user/user';
import { CommentsComponent, CommentComponent } from './components/comment/comment';
import { LoginComponent, SignUpComponent, ErrorComponent } from './components/common';

const appRoutes: Routes = [
    // main
    {
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'more', component: MoreComponent },
            {
                path: 'news', component: NewsContainerComponent, children: [
                    { path: '', component: NewsComponent },
                    { path: 'article/:id', component: ArticleComponent }
                ]
            }
        ]
    },
    // admin
    {
        path: 'admin', component: AdminComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
            // subscribers
            { path: 'subscribers', component: SubscribersComponent },
            // article
            { path: 'articles', component: SimpleArticleListComponent },
            {
                path: 'article', component: ManageArticleComponent, children: [
                    { path: '', redirectTo: 'add', pathMatch: 'full' },
                    { path: 'add', component: AddArticleComponent },
                    { path: ':id', component: ArticleComponent },
                    { path: ':id/edit', component: EditArticleComponent }
                ]
            },
            // user
            { path: 'users', component: UsersComponent },
            {
                path: 'user', component: ManageUserComponent, children: [
                    { path: '', redirectTo: 'add', pathMatch: 'full' },
                    { path: 'add', component: AddUserComponent },
                    { path: ':id', component: UserComponent },
                    { path: ':id/edit', component: EditUserComponent }
                ]
            },
            // comment
            { path: 'comments', component: CommentsComponent },
            { path: 'comment/:id', component: CommentComponent }
        ]
    },
    // common
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    {
        path: 'error', component: ErrorComponent, children: [
            { path: ':name', component: ErrorComponent }
        ], data: { subtitle: 'page not found' }
    },
    { path: '**', redirectTo: 'error' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });