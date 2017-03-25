import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/home/home.component';
import { ArticlesComponent } from './components/article/list/articles.component';
import { SearchComponent } from './components/main/search/search.component';
import { AboutComponent } from './components/main/about/about.component';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { Configuration } from './app.constants';
import { ArticleService } from './services/article.service';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { UsersComponent } from './components/user/list/users.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from './components/comment/list/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { SimpleArticleListComponent } from './components/article/simple-list/simple-article-list.component';
import { ManageArticleComponent } from './components/article/manage/manage-article.component';
import { EditArticleComponent } from './components/article/manage/edit/edit-article.component';
import { ManageUserComponent } from './components/user/manage/manage-user.component';
import { EditUserComponent } from './components/user/manage/edit/edit-user.component';
import { AddArticleComponent } from './components/article/manage/add/add-article.component';
import { AddUserComponent } from './components/user/manage/add/add-user.component';
import { MoreComponent } from './components/main/more/more.component';
import { NewsComponent } from './components/news/list/news.component';
import { NewsContainerComponent } from './components/news/news-container.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { AuthenticationService } from './services/authentication.service';
import { ProgressBar } from './components/progress-bar/progress-bar.component';
import { UserService } from './services/user.service';
import { CommentService } from './services/comment.service';
import { SubscribersComponent } from './components/subscribe/list/subscribers.component';
import { AdminService } from './services/admin.service';
import { AdminCardsComponent } from './components/admin/cards/admin-cards.component';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        MainComponent,
        HomeComponent,
        AboutComponent,
        MoreComponent,
        SearchComponent,
        // news
        NewsComponent,
        NewsContainerComponent,
        // admin
        AdminComponent,
        AdminCardsComponent,
        DashboardComponent,
        SettingsComponent,
        // comment
        CommentComponent,
        CommentsComponent,
        // user
        UserComponent,
        UsersComponent,
        ManageUserComponent,
        EditUserComponent,
        AddUserComponent,
        // article
        ArticleComponent,
        ArticlesComponent,
        SimpleArticleListComponent,
        ManageArticleComponent,
        EditArticleComponent,
        AddArticleComponent,
        // subscribers
        SubscribersComponent,
        // common
        LoginComponent,
        SignUpComponent,
        ErrorComponent,
        HeaderComponent,
        ProgressBar
    ],
    entryComponents: [SearchComponent],
    providers: [
        appRoutingProviders,
        AuthenticationService,
        AdminService,
        ArticleService,
        UserService,
        CommentService,
        Configuration
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }