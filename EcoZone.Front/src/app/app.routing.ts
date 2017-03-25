import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/main/about/about.component';
import { HomeComponent } from './components/main/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { UsersComponent } from './components/user/list/users.component';
import { ArticleComponent } from './components/article/article.component';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from './components/comment/list/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { ArticlesComponent } from './components/article/list/articles.component';
import { SimpleArticleListComponent } from './components/article/simple-list/simple-article-list.component';
import { ManageArticleComponent } from './components/article/manage/manage-article.component';
import { EditArticleComponent } from './components/article/manage/edit/edit-article.component';
import { EditUserComponent } from './components/user/manage/edit/edit-user.component';
import { ManageUserComponent } from './components/user/manage/manage-user.component';
import { AddArticleComponent } from './components/article/manage/add/add-article.component';
import { AddUserComponent } from './components/user/manage/add/add-user.component';
import { MoreComponent } from './components/main/more/more.component';
import { NewsContainerComponent } from './components/news/news-container.component';
import { NewsComponent } from './components/news/list/news.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { SubscribersComponent } from './components/subscribe/list/subscribers.component';

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