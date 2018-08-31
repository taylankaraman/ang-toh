// Modules
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';  // NgModel lives here

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { MessagesComponent }    from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [  
    // This list of modules are those that export components, directives, or pipes that the component templates in this module reference. 
    // A component template can reference another component, directive, or pipe when the referenced class is declared in this module or 
    // the class was imported from another module.
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [AppComponent]  // bootstrap—the root component that Angular creates and inserts into the index.html host web page.
})
export class AppModule { }
