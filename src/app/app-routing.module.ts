import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './components/layout/shell/shell.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: '', component: ShellComponent, children: [
    // { path: '', component: }
    { path: '', component: MainComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
