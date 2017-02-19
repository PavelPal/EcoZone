import {MaterialModule} from "@angular/material";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {Home} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {AboutComponent} from "./components/about/about.component";
import {routing, appRoutingProviders} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {Configuration} from "./app.constants";
import {ArticleService} from "./services/article.service";

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        SearchComponent,
        Home
    ],
    entryComponents: [SearchComponent],
    providers: [
        appRoutingProviders,
        ArticleService,
        Configuration
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}