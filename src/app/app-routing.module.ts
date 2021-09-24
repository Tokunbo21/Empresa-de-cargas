import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RastreioComponent } from './rastreio/rastreio.component';

const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch: 'full'},  
  {path:'home', component: HomeComponent },
  {path:'rastreio', component: RastreioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
