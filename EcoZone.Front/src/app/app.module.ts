import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { Configuration } from './app.constants';
import { MainComponent, HomeComponent, AboutComponent, MoreComponent, SearchComponent } from './components/main/main';
import { NewsComponent, NewsContainerComponent } from './components/news/news';
import { AdminComponent, AdminCardsComponent, DashboardComponent, SettingsComponent } from './components/admin/admin';
import { CommentComponent, CommentsComponent } from './components/comment/comment';
import { UserComponent, UsersComponent, ManageUserComponent, EditUserComponent, AddUserComponent } from './components/user/user';
import {
    ArticleComponent, ArticlesComponent, SimpleArticleListComponent, ManageArticleComponent, EditArticleComponent, AddArticleComponent
} from './components/article/article';
import { SubscribersComponent } from './components/subscribe/subscribe';
import { LoginComponent, SignUpComponent, ErrorComponent, HeaderComponent, ProgressBar } from './components/common';
import { AuthenticationService, AdminService, ArticleService, UserService, CommentService } from './services/services';

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