import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '',redirectTo: '/header',pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'counter',component: CounterComponent},
  {path: 'vatavaran', component: WeatherComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
