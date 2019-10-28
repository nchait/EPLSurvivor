import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { TeamsService } from './services/teams.service';
import { TeamsComponent } from './components/teams/teams.component';
import { UserSelectionComponent } from './components/user-selection/user-selection.component';

const appRoutes: Routes = [
  { path: '**', component: TeamsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    UserSelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
