import { CreerUserPartenaireComponent } from './components/creer-user-partenaire/creer-user-partenaire.component';
import { CreationComponent } from './components/creation/creation.component';
import { FaireDepotComponent } from './components/faire-depot/faire-depot.component';
import { ListePartenaireComponent } from './components/liste-partenaire/liste-partenaire.component';
import { ListeComponent } from './components/liste/liste.component';
import { AjoutComponent } from './pages/ajout/ajout.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'login',component:ConnexionComponent},
  {path: 'accueil' ,component:AccueilComponent},
  {path:'ajout', component:AjoutComponent},
  {path: 'liste',component:ListeComponent},
  {path: 'create_acount' ,component:CreationComponent},
  {path:'listePart',component:ListePartenaireComponent},
  {path:'depot',component:FaireDepotComponent},
  {path:'userPart',component:CreerUserPartenaireComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
