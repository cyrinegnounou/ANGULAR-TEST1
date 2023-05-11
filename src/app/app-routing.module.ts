import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { AddVideoComponent } from './add-video/add-video.component';

const routes: Routes = [
  {path:'videos',component:VideoComponent},
  {path:'addvideo',component:AddVideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
