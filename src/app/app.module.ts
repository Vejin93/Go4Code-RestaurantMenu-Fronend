import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListOneComponent } from './items-list-one/items-list-one.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsPageComponent } from './page/items-page/items-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './page/main/main.component';
import { FilterItemsComponent } from './filter-items/filter-items.component';
import { LoginComponent } from './login/login.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { FilterByNameItemsComponent } from './filter-by-name-items/filter-by-name-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListOneComponent,
    ItemsListComponent,
    ItemsPageComponent,
    PageNotFoundComponent,
    MainComponent,
    FilterItemsComponent,
    LoginComponent,
    EditMenuComponent,
    FilterByNameItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
