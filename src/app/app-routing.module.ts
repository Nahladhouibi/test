import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { CreeCagnotteComponent } from './cree-cagnotte/cree-cagnotte.component';
import { DecouvrirComponent } from './decouvrir/decouvrir.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'connecter',component:ConnecterComponent},
  {path:'cree-cagnotte',component:CreeCagnotteComponent},
  {path:'decouvrir',component:DecouvrirComponent},
  {path:'recherche',component:RechercheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
