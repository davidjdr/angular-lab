import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboComponent } from './labo/labo.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'labo', component: LaboComponent },
  { path: 'dashboard', component: DashboardComponent },
  //ruta por defecto
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  //configura el enrutador a nivel raiz de la app
  imports: [RouterModule.forRoot(routes)],
  //exportar el RouterModule hace que as directivas de enrutador estén
  //disponibles para su uso en los componentes de AppModule que las necesitarán
  exports: [RouterModule]
})
export class AppRoutingModule { }
