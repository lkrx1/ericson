import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';
import { ProspectsComponent } from './prospects/prospects.component';
import { DossierProspectComponent } from './dossier-prospect/dossier-prospect.component';
import { ClientsComponent } from './clients/clients.component';
import { FacturationComponent } from './facturation/facturation.component';
import { MandatsComponent } from './mandats/mandats.component';
import { BanquesComponent } from './banques/banques.component';
import { ApporteursComponent } from './apporteurs/apporteurs.component';
import { NotairesComponent } from './notaires/notaires.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { MatPaginatorModule } from '@angular/material/paginator';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DashboardComponent } from './dashboard/dashboard.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BodyComponent,
    ProspectsComponent,
    DossierProspectComponent,
    ClientsComponent,
    FacturationComponent,
    MandatsComponent,
    BanquesComponent,
    ApporteursComponent,
    NotairesComponent,
    ComparateurComponent,
    StatistiqueComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
