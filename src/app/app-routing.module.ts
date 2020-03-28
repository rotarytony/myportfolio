import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import {ExperiencesComponent} from './experiences/experiences.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'experiences', component: ExperiencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
