import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { ReceiveComponent } from './receive/receive.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'one',component:OneComponent},
  {path:'two',component:TwoComponent},
  {path:'receive',component:ReceiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
