import { MaterialModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/main/home/home.component";
import { ArticleListComponent } from "./components/article/list/article-list.component";
import { SearchComponent } from "./components/main/search/search.component";
import { AboutComponent } from "./components/main/about/about.component";
import { routing, appRoutingProviders } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { Configuration } from "./app.constants";
import { ArticleService } from "./services/article.service";
import { AdminComponent } from "./components/admin/admin.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { MainComponent } from "./components/main/main.component";
import { ErrorComponent } from "./components/error/error.component";
import { SettingsComponent } from "./components/admin/settings/settings.component";
import { UsersComponent } from "./components/admin/users/users.component";
import { HeaderComponent } from "./components/header/header.component";

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
        SearchComponent,
        AdminComponent,
        DashboardComponent,
        UsersComponent,
        SettingsComponent,
        ArticleListComponent,
        ErrorComponent,
        HeaderComponent
    ],
    entryComponents: [SearchComponent],
    providers: [
        appRoutingProviders,
        ArticleService,
        Configuration
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}