import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { CharlieComponent } from './charlie/charlie.component';
import { DeltaComponent } from './delta/delta.component';
import { EpsilonComponent } from './epsilon/epsilon.component';



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'alpha',component: AlphaComponent },
  { path: 'beta',component: BetaComponent },
  { path: 'charlie',component: CharlieComponent },
  { path: 'delta',component: DeltaComponent },
  { path: 'epsilon',component: EpsilonComponent },
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
