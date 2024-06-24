import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateContatoComponent } from './pages/contato/create-contato/create-contato.component';
import { EditContatoComponent } from './pages/contato/edit-contato/edit-contato.component';
import { ConsultaAtividadeComponent } from './pages/atividade/consulta-atividade/consulta-atividade.component';
import { CreateAtividadeComponent } from './pages/atividade/create-atividade/create-atividade.component';
import { EditAtividadeComponent } from './pages/atividade/edit-atividade/edit-atividade.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contato/create',
    component: CreateContatoComponent
  },
  {
    path: 'contato/edit/:id',
    component: EditContatoComponent
  },
  {
    path: 'atividades',
    component: ConsultaAtividadeComponent
  },
  {
    path: 'atividade/create',
    component: CreateAtividadeComponent
  },
  {
    path: 'atividade/edit/:id',
    component: EditAtividadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
