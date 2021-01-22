import { HomeViewComponent } from './home-view/home-view.component';
import { RedirectComponent } from './redirect/redirect.component';
import { MatchViewComponent } from './match-view/match-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { component: HomeViewComponent, path: '' },
  { component: MatchViewComponent, path: 'match' },
  { component: RedirectComponent, path: 'redirect'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
