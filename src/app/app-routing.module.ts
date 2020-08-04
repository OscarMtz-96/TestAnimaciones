import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectorComponent } from './components/selector/selector.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';


const routes: Routes = [
  {path: 'inicio', component: SelectorComponent},
  {path: 'movimientos', component: MovimientosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'selector'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
