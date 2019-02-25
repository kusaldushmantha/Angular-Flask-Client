import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './index-component/index.component';
import { SignUpComponent } from './sign-up-component/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        SignUpComponent,
        SignInComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
