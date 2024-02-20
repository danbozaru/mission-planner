import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PlannerComponent } from './planner/planner.component';
import { PlayerComponent } from './player/player.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'planner', component: PlannerComponent },
  { path: 'player', component: PlayerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];
