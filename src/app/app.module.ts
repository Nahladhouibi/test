import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DecouvrirComponent } from './decouvrir/decouvrir.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CreeCagnotteComponent } from './cree-cagnotte/cree-cagnotte.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DecouvrirComponent,
    ConnecterComponent,
    RechercheComponent,
    CreeCagnotteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
