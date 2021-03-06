import { AboutComponent } from './features/about/about.component';
import { MessagesComponent } from './features/messages/messages.component';
import { ForumsComponent } from './features/forums/forums.component';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'forums', component: ForumsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
