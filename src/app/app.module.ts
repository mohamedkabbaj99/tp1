import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandeCreateComponent } from './commandes/commande-create/commande-create.component';
import { CommandeListComponent } from './commandes/commande-list/commande-list.component';

import { TaxeComponent } from './taxe/taxe.component';
import {FormsModule} from '@angular/forms';
import {TaxeCreateComponent} from './taxe/taxe-create/taxe-create.component';
import {TaxeListComponent} from './taxe/taxe-list/taxe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    CommandeCreateComponent,
    CommandeListComponent,
    TaxeCreateComponent,
    TaxeListComponent,
    TaxeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
