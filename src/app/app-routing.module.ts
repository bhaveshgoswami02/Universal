import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllDataComponent } from './show-all-data/show-all-data.component';
import { SingleDataComponent } from './single-data/single-data.component';

const routes: Routes = [
  {path:'',component:ShowAllDataComponent},
  {path:'singlePage/:id',component:SingleDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
