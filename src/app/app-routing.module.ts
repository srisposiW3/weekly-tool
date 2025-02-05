import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakoutRoomsComponent } from './pages/breakout-rooms/breakout-rooms.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RetroDashboardComponent } from './retro/retro-dashboard/retro-dashboard.component';

const routes: Routes = [
  { path: 'settings/:rooms', component: SettingsComponent },
  { path: 'breakout/:room', component: BreakoutRoomsComponent },
  { path: 'retro/:room', component: RetroDashboardComponent },
  { path: ':room', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
