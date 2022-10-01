import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { MainComponent } from './page/main/main.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'items-list', component: ItemsListComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'edit-menu', component: EditMenuComponent },
  {path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
