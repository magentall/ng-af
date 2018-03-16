import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A1Component } from "./a1/a1.component";
import { B1Component } from "./b1/b1.component";
import { C1Component } from "./c1/c1.component";


const routes: Routes = [
  { path: 'a1', component: A1Component },
  { path: 'b1', component: B1Component },
  { path: 'c1', component: C1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
