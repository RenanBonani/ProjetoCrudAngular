import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { path: 'Home', component:DummyComponent },
  { path: 'Servico', component:DummyComponent },
  { path: 'QuemSomos', component:DummyComponent },
  { path: 'Login', component:DummyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
