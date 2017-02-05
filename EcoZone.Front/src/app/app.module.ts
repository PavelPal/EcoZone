import {MaterialModule} from "@angular/material";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {Home} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {AboutComponent} from "./about/about.component";
import {routing, appRoutingProviders} from "./app.routing";
import {FormsModule} from "@angular/forms";

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
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}