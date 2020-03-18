import { NgxLoadingModule } from 'ngx-loading';
import { ListePartenaireComponent } from './components/liste-partenaire/liste-partenaire.component';
import { ListeComponent } from './components/liste/liste.component';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertionComponent } from './components/insertion/insertion.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AjoutComponent } from './pages/ajout/ajout.component';
import { CreationComponent } from './components/creation/creation.component';
import { FaireDepotComponent } from './components/faire-depot/faire-depot.component';
import { CreerUserPartenaireComponent } from './components/creer-user-partenaire/creer-user-partenaire.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormComponent,
    InsertionComponent,
    AccueilComponent,
    AjoutComponent,
    ListeComponent,
    CreationComponent,
    FaireDepotComponent,
    ListePartenaireComponent,
    CreerUserPartenaireComponent,
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
