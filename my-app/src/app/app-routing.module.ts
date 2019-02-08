import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';

const routes: Routes = [
  { path: '', component: MyFirstComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
