import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandPageComponent} from "./land-page/land-page.component";
import {AboutComponent} from "./about/about.component";
import { EditConversaoComponent } from './edit-conversao/edit-conversao.component';

const routes: Routes = [
  {path: '', component: LandPageComponent, data: {state: ''}},
  {path: 'about', component: AboutComponent},
  {path: 'editar/:id', component: EditConversaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
