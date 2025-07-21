import { Routes } from '@angular/router';
import { ListComponent } from './components/user/list/list.component';
import { CreateComponent } from './components/user/create/create.component';
import { UpdateComponent } from './components/user/update/update.component';

export const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: ListComponent },
  { path: 'usuarios/crear', component: CreateComponent },
  { path: 'usuarios/editar/:id', component: UpdateComponent },
];
