import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { TeamsService } from './services/teams.service';
import { UsersService } from './services/users.service';

import { LandingComponent } from './components/landing/landing.component';
import { TeamsComponent } from './components/teams/teams.component';
import { UserSelectionComponent } from './components/user-selection/user-selection.component';

const appRoutes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: '**', component: LandingComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    UserSelectionComponent,
    LandingComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    TeamsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
