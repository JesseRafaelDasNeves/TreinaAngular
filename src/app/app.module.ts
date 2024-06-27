import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoConsultaComponent } from './componentes/contatos/contato-consulta/contato-consulta.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './componentes/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './pages/home/home.component';
import { CreateContatoComponent } from './pages/contato/create-contato/create-contato.component';
import { ContainerComponent } from './componentes/container/container.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditContatoComponent } from './pages/contato/edit-contato/edit-contato.component';
import { ConsultaAtividadeComponent } from './pages/atividade/consulta-atividade/consulta-atividade.component';
import { CreateAtividadeComponent } from './pages/atividade/create-atividade/create-atividade.component';
import { MatSelectModule } from '@angular/material/select';
import { EditAtividadeComponent } from './pages/atividade/edit-atividade/edit-atividade.component';
import { MenuLeftComponent } from './componentes/menu-left/menu-left.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoConsultaComponent,
    HeaderComponent,
    HomeComponent,
    CreateContatoComponent,
    ContainerComponent,
    EditContatoComponent,
    ConsultaAtividadeComponent,
    CreateAtividadeComponent,
    EditAtividadeComponent,
    MenuLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
