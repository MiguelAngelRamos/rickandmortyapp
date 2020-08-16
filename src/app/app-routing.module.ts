import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'character/:page', component: CharacterComponent },
  { path: 'character', component: CharacterComponent },
  { path: '**', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
